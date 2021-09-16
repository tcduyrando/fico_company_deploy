/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
const app = require('express');
const router = app.Router();
const bcrypt = require('bcryptjs');
const User = require('../schemas/user');
const fs = require('fs');
const auth = require("../middleware/verifyToken");
const sharp = require('sharp');
const multer = require('multer');

/* ---------------------------------------------------- 
                START: Storage
---------------------------------------------------- */
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/users/')
    },
    filename: function(req, file, cb){
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
})

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
const upload = multer({
    storage: storage, limits:{
    fileSize: 1024 * 1024 * 16
    },
    fileFilter: fileFilter
});

/* ---------------------------------------------------- 
                END: Storage
---------------------------------------------------- */

/* ---------------------------------------------------- 
                START: Router
---------------------------------------------------- */

// GET
router.get('/', (req, res, next) => {
   User.find({}, (err, users) => {
      if (err) return next(err);
      res.send(users);
   })
})


router.get('/:id', auth, (req,res) => {
    User.findById(req.params.id, function(err, user){
        if (user){
        res.send(user)
        }
        else{
            res.send("Not found")
        }
    })
})

//DELETE
router.delete('/:id', auth, (req, res) => { 
    User.findById(req.params.id, (err, user) => {
        if (err) {
            handleError(err);
        } else if (user.image) {
            if (typeof user.profilePicture !== 'undefined' && user.profilePicture !== '') {
                fs.unlinkSync('.' + user.profilePicture);
            }
        }
    })

    User.findByIdAndDelete(req.params.id,
        {   
            ...req.body,
        })
        .exec((err, docs) => {
            if (err !== null) {
                console.log(`Error in delete 1 user: ${err}`);
            } else {
                res.send(docs);
            }
        })

})

// UPDATE
router.put('/:id', auth, upload.single('profilePicture'), async (req, res, next) => {
    let salt = await bcrypt.genSalt(10);
    let encryptedPass = await bcrypt.hash(req.body.password, salt);
    if (req.file) {
            const path = "/" + req.file.path.split("\\").join("/");
            sharp(req.file.path).resize(256, 256).toFile('./uploads/users/' + '256x256-' + req.file.filename, (err) => {
                if (err) {
                    console.error('Sharp Error: ', err)
                }
                console.log('Resize successfully');
                fs.unlinkSync('.' + path)
            });
            console.log(path);
            User.findByIdAndUpdate(req.params.id,
                {   
                    name: req.body.name,
                    dob: req.body.dob,
                    location: req.body.location,
                    email: req.body.email,
                    password: encryptedPass,
                    profilePicture: path.replace(req.file.filename, '256x256-' + req.file.filename)
                },
                { new: true }
            )
                .then(doc => res.send(doc))
                .catch(err => res.send(err))
        // } 
    } else {
        User.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                dob: req.body.dob,
                location: req.body.location,
                email: req.body.email,
                password: encryptedPass,
            },
            { new: true })
            .then(doc => res.send(doc))
            .catch(err => res.send(err))
    }
})

// Update Approve Admin
router.put("/:id/status", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        console.log(foundUser.isAdmin);
        if (err) {
            console.log(err);
        }
        User.findByIdAndUpdate(foundUser.id, { $set: { isAdmin: !foundUser.isAdmin } }, (err2, result) => {
            console.log(err, result);
        });
    });
});

router.post('/', auth, async (req, res, next) => {
   try {
      let salt = await bcrypt.genSalt(10);
      let encryptedPass = await bcrypt.hash(req.body.password, salt);
      let userObj = {
         name: req.body.name,
         email: req.body.email,
         password: encryptedPass
      }
      User.create(userObj, (err, user) => {
         if (err) return next(err);
         res.send(user);
      })
   }
   catch (e) {
      console.log(e);
   }
})

/* ----------------------------------------------------
                END: Router
---------------------------------------------------- */

function handleError(err){
    console.log(err)
 }
 

module.exports = router;
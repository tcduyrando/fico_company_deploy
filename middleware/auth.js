const User = require('../schemas/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation')
const express = require('express');
const router = express.Router();
const auth = require("./verifyToken");



// REGISTER
router.post('/register', async (req, res) => {
  // Validate the data
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // Checking if the email is already in the database
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send('Email already exist')

  // Hash password
  const salt = await bcrypt.genSaltSync(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  })

  try {
    await user.save()
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  // Validate the data
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // Checking if the email or password not correct
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Email or password is incorrect!')

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send('Email or password is incorrect!')

  // Create and assign a token
  const token = jwt.sign({_id: user._id}, 'somethingrandom')
  // res.status(200).header('auth-token', token).send(token)

  res.status(200).json({auth: true, token: token, result: user.name, id: user.id, isAdmin: user.isAdmin})
})

// Logout
router.get('/logout', auth,(req,res) => {
  req.user.deleteToken(req.token,(err,user)=>{
      if(err) return res.status(400).send(err);
      res.sendStatus(200);
  });
}); 


module.exports = router
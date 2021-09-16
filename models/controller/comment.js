const Fundraiser = require('../Fundraisers');
const mongoose = require('mongoose');

module.exports = (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params._id)) {
        Fundraiser.findByIdAndUpdate(
            { _id: req.params._id },
            { 
                $push: {
                    comments: req.user._id
                }
            },
            {
                new: true
            }
        ).then((doc) => {
            if(doc) {
                res.json(doc)
            }
        }).catch((err) => {
            res.send(err);
            console.log(err);
        })
        .populate('comments.postedBy')
    }
}
const mongoose = require('mongoose');

const FundraiserSchema = new mongoose.Schema({
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Admin",
    // },
    title: String,
    fundType:  String,
    name: String,
    address:  String,
    donate: String,
    donaterequire: String,
    information: String,
    percent: {type: Number,
        max: 100},
    image:  {type: String,
        required: false},
    datePosted: {
        type: Date,
        default: new Date()
    },
    // comments: [{
    //     admin: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "admin",
    //     },
});


const Fundraiser = mongoose.model('fundraiser', FundraiserSchema);
module.exports = Fundraiser;


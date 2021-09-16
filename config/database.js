const mongoose = require("mongoose");
require("dotenv").config({ path: 'ENV_FILENAME'});


const { MONGO_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    // for some reason, MONGO_URI is not recognized as a String when deployed with Heroku
    .connect('mongodb+srv://admin_giaminhphamle:025861223@cluster0.psjpd.mongodb.net/COSC2769?retryWrites=true&w=majority', ) 
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};

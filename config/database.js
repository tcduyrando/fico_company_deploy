const mongoose = require("mongoose");
require("dotenv").config({ path: path.resolve(__dirname, '../.env') });


const { MONGO_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    // for some reason, MONGO_URI is not recognized as a String when deployed with Heroku
    .connect(MONGO_URI, ) 
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};

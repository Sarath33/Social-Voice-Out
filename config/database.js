
const mongoose = require("mongoose");

// Replace this with your MONGOURI.
mongoose.set('useFindAndModify', false);
const MONGOURI = "mongodb+srv://yelp:Tech@1234@yelp.kmvtt.mongodb.net/test";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
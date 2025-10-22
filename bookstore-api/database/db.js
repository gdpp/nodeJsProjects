const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Mongo db conencted succesfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

module.exports = {
  connectToDb,
};

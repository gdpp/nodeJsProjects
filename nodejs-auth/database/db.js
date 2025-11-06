const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB connection successfully");
  } catch (e) {
    console.log("MongoDB connection fail");
    process.exit(1);
  }
};

module.exports = {
  connectToDB,
};

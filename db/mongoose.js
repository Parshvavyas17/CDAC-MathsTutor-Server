const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("MongoDB connected successfully");
});

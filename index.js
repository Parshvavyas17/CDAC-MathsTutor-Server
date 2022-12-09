require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// const userRouter = require("./routes/user.route");
// app.use("/api/user", userRouter);

const polynomialRouter = require("./routes/polynomial.route");
app.use("/api/poly", polynomialRouter);

app.get("/api/home", (req, res) => {
  res.send("Routes running successfully");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

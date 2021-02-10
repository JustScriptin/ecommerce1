//===============================//
//+++++++Dependencies, ect+++++++//
//===============================//
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3009;
const MONGOURI = process.env.MONGODB_URI;
const cors = require("cors");

//===============================//
//++++++++++MIDDLEWARE+++++++++++//
//===============================//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//===============================//
//++++++++++++ROUTES+++++++++++++//
//===============================//
const menRouter = require("./controllers/menRouter");
app.use("/api/men", menRouter);

const womenRouter = require("./controllers/womenRouter");
app.use("/api/women", womenRouter);

const shopAllRouter = require("./controllers/shopAllRouter");
app.use("/api/shopAll", shopAllRouter);

const homeRouter = require("./controllers/homeRouter");
app.use("/api/home", homeRouter);

//===============================//
//+++++DATABASE CONNECTION+++++++//
//===============================//
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
mongoose.connection.on("error", (err) => {
  console.log("You're disconnected from MongoDB, you should refresh");
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log("Coming in loud and clear on ", PORT);
});

module.exports = app;

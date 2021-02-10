const { Schema, model } = require("mongoose");

const womenSchema = Schema({
  name: String,
  price: String,
  img: String,
});

module.exports = model("womenSchema", womenSchema);

const { Schema, model } = require("mongoose");

const homeSchema = Schema({
  name: String,
  price: String,
  img: String,
});

module.exports = model("homeSchema", homeSchema);

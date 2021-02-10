const { Schema, model } = require("mongoose");

const menSchema = Schema({
  name: String,
  price: String,
  img: String,
});

module.exports = model("menSchema", menSchema);

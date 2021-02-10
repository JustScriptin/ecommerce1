const { Schema, model } = require("mongoose");

const shopAllSchema = Schema({
  name: String,
  price: String,
  img: String,
});

module.exports = model("shopAllSchema", shopAllSchema);

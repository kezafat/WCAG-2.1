const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Ingredients = require('./Ingredients');
const Nutritions = require('./Nutritions');


let receptSchema = new Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  time: { type: Number, required: true },
  portion: { type: Number, required: true },
  ingredient: [Ingredients.schema],
  instruction: [{ type: Array, required: true }],
  nutrition: [Nutritions.schema],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Recept", receptSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Ingredients = require('./Ingredients');
const Nutritions = require('./Nutritions');


function friendlyUrl(str) {
  str = str.replace(new RegExp(/ä/, 'gi'), 'ae');
  str = str.replace(new RegExp(/å/, 'gi'), 'au');
  str = str.replace(new RegExp(/ö/, 'gi'), 'ou');
  return str.replace(new RegExp(" ", 'gi'), "-").toLowerCase();
}

let receptSchema = new Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String },
  time: { type: Number, required: true },
  portion: { type: Number, required: true, default: 2 },
  ingredient: [Ingredients.schema],
  instruction: [{ type: Array, required: true }],
  nutrition: [Nutritions.schema],
  date: { type: Date, default: Date.now }
});

receptSchema.pre('save', function (next) {
  this.url = friendlyUrl(this.title)
  next()
})

module.exports = mongoose.model("Recept", receptSchema);
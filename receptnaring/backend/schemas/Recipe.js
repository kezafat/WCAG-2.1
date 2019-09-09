const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let receptSchema = new Schema({
  img: {type: String, required: true},
  title: {type: String, required: true},
  time: {type: Number, required: true},
  portion: {type: Number, required: true},
  ingredient: [{type: String, required: true}],
  instructions: [{type: String, required: true}],
  nutrition: [{type:String, required: true}],
  date: { type: Number, required: true },
 });

module.exports = mongoose.model("Recept", receptSchema);


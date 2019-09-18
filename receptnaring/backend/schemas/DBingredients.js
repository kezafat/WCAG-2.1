const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let dbIngSchema = new Schema({
  Namn: { type: String, required: true },
  Naringsvarden: {
    Mattade: Number,
    Enkelomattade: Number,
    Fleromattade: Number,
    Kolhydrater: Number,
    Protein: Number,
    Salt: Number
  },
});

module.exports = mongoose.model('DBingredients', dbIngSchema);
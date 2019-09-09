const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ingredientsSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    qty: { type: Number, required: true }
});

module.exports = mongoose.model('Ingredients', ingredientsSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let nutritionsSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, default: "g"},
    qty: { type: Number, required: true }
});

module.exports = mongoose.model('Nutritions', nutritionsSchema);
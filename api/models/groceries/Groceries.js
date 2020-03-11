const mongoose = require('mongoose');

let grocerySchema = new mongoose.Schema({
    name: String,
    price: mongoose.Schema.Types.Decimal128,
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'GroceryType' }
})

module.exports = mongoose.model("Groceries", grocerySchema);
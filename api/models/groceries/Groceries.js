const mongoose = require('mongoose');

let grocerySchema = new mongoose.Schema({
    name: String,
    price: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'GroceryType' },
    checked: { type: Boolean, default: false }
})

module.exports = mongoose.model("Groceries", grocerySchema);
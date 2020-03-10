const mongoose = require('mongoose');

let groceryTypeSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('GroceryType', groceryTypeSchema);
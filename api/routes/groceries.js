const express = require('express');
const router = express.Router();
const Grocery = require('../models/groceries/Grocery.js');
const GroceryType = require('../models/groceries/GroceryType.js');

router.get('/groceryTypes', async (req, res) => {        
    let groceryTypes = await GroceryType.find({});
    res.json(groceryTypes);
})

module.exports = router;
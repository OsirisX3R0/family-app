const express = require('express');
const router = express.Router();
const GroceryType = require('../models/GroceryType.js')

router.get('/groceryTypes', async (req, res) => {        
    let groceryTypes = await GroceryType.find({});
    res.json(groceryTypes);
})

module.exports = router;
const express = require('express');
const router = express.Router();
const Groceries = require('../models/groceries/Groceries.js');
const GroceryType = require('../models/groceries/GroceryType.js');

// Get grocery list
router.get('/', async (req, res) => {
    let groceryList = await Groceries.find({});
    // .aggregate()
    // .match({})
    // .group({ _id: "$type", "total": { $sum: "$price" } })
    // .project({});
    res.json(groceryList);
})

// Get grocery types
router.get('/groceryTypes', async (req, res) => {        
    let groceryTypes = await GroceryType.find({});
    res.json(groceryTypes);
})

// Add a grocery item
router.post('/', async (req, res) => {
    let newGrocery = new Groceries(req.body);
    await newGrocery.save();
    res.status(201).json(newGrocery);
})

module.exports = router;
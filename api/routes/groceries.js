const express = require('express');
const router = express.Router();
const Groceries = require('../models/groceries/Groceries.js');
const GroceryType = require('../models/groceries/GroceryType.js');
const ObjectId = require('mongoose').Types.ObjectId;

// Get grocery list
router.get('/', async (req, res) => {
    let groceryList = await Groceries.find({})
        .populate('category');
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
    let newGrocery = new Groceries({
        name: req.body.name,
        price: req.body.price,
        category: new ObjectId(req.body.category)
    });
    
    return res.status(201).json(newGrocery/*.populate('category')*/);
})

// Delete a grocery item
router.delete('/:id', async (req, res) => {
    await Groceries.deleteOne({ _id: req.params.id })

    return res.send(req.params.id)
})

module.exports = router;
const express = require('express');
const router = express.Router();
const Groceries = require('../models/groceries/Groceries.js');
const GroceryType = require('../models/groceries/GroceryType.js');
const ObjectId = require('mongoose').Types.ObjectId;

// Get grocery list
router.get('/', async (req, res) => {
    let groceryList = await Groceries.find({}, (err, groceries) => {
        if (err) res.send(err);
    })
    .populate('category');
    res.json(groceryList);
})

// Get grocery types
router.get('/groceryTypes', async (req, res) => {        
    let groceryTypes = await GroceryType.find({}, (err, groceries) => {
        if (err) res.send(err);
    });
    res.json(groceryTypes);
})

// Add a grocery item
router.post('/', async (req, res) => {
    let newGrocery = new Groceries({
        name: req.body.name,
        price: req.body.price,
        category: new ObjectId(req.body.category)
    });
    newGrocery = await newGrocery.populate('category').execPopulate()
    await newGrocery.save();
    
    return res.status(201).json(newGrocery);
})

// Update a grocery item
router.put('/:id', async (req, res) => {
    let updatedItem = Groceries.findByIdAndUpdate({ _id: req.body._id }, req.body).exec(err => {
        if (err) res.send(err)

        return res.send(updatedItem);
    })

    //await updatedItem.save()
})

// Check/uncheck
router.put('/check/:id', async (req, res) => {
    await Groceries.findById(req.params.id, (err, item) => {
        if (err) res.send(err)

        item.checked = req.body.checked;
        item.save();
        return res.send(item);
    })
})

// Save checked items
// router.put('/save', async (req, res) => {
//     req.body.items.forEach(item => {
//         Groceries.findByIdAndUpdate({ _id: item._id }, item).exec(err => {
//             if (err) res.send(err)
//         })
//     })

//     return res.status(200);
// })

// Delete a grocery item
router.delete('/:id', async (req, res) => {
    await Groceries.deleteOne({ _id: req.params.id })

    return res.send(req.params.id)
})

// Clear grocery list
router.delete('/', async (req, res) => {
    await Groceries.deleteMany({}).exec(err => {
        if (err) res.send(err);

        return res.send("Grocery list cleared");
    })
})

module.exports = router;
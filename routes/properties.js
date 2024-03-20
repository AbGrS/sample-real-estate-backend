const express = require('express');
const router = express.Router();
const Property = require('../models/property');

// Middleware function
const middlewareFunction = (req, res, next) => {
    next();
};

router.get('/', middlewareFunction, async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post('/postProperty', middlewareFunction, async (req, res) => {
    try {
        const { title, description, price, location, imageURL, isFavourite } = req.body;
        const properties = await Property.create({
            title: title || '', 
            description: description || '', 
            price: price || 0, 
            location: location || '',  
            imageURL: imageURL || '', 
            isFavourite: isFavourite || false, 
        })
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/updateFav', middlewareFunction, async (req, res) => {
    try {
        const { _id, flag} = req.body;
        const properties = await Property.findOneAndUpdate({_id}, {isFavourite: flag});
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/deleteProperty', middlewareFunction, async (req, res) => {
    try {
        const { _id } = req.body;
        const properties = await Property.findOneAndDelete({_id});
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

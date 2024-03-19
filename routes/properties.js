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

router.post('/updateFav', middlewareFunction, async (req, res) => {
    try {
        const { _id, flag} = req.body;
        const properties = await Property.find({_id});
        properties.isFav = flag;
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

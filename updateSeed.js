const mongoose = require('mongoose');
const Property = require('./models/property');
require('dotenv').config();

// Connect to MongoDB Atlas
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas");

    Property.updateMany( { isFavourite : { $exists : false } }, { isFavourite : false } )
        .then(() => {
            console.log("schema updated successfully");
            mongoose.disconnect();
        })
        .catch(err => console.error(err));

}).catch(err => console.error(err));



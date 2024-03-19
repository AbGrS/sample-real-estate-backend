const mongoose = require('mongoose');
const Property = require('./models/property');
require('dotenv').config();

// Connect to MongoDB Atlas
console.log("delete data", process.env.URI)
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas");

    Property.deleteMany()
        .then(() => {
            console.log("Mock data deleted successfully");
            mongoose.disconnect();
        })
        .catch(err => console.error(err));

}).catch(err => console.error(err));

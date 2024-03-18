const mongoose = require('mongoose');
const Property = require('./models/property');

// Connect to MongoDB Atlas
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas");

    // Insert mock data
    const mockData = [
        {
            title: "Castle",
            description: "A majestic castle fit for royalty",
            price: 1000000,
            location: "King's Landing",
            imageURL: "https://example.com/castle.jpg"
        },
        {
            title: "Cozy Cottage",
            description: "A charming cottage in the countryside",
            price: 500000,
            location: "Green Hills",
            imageURL: "https://example.com/cottage.jpg"
        },
        // Add more mock data as needed
    ];

    Property.insertMany(mockData)
        .then(() => {
            console.log("Mock data inserted successfully");
            mongoose.disconnect();
        })
        .catch(err => console.error(err));

}).catch(err => console.error(err));

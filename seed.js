const mongoose = require('mongoose');
const Property = require('./models/property');
require('dotenv').config();

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
            imageURL: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?w=1800&t=st=1710840196~exp=1710840796~hmac=09446de3242cf08242830eb15d476086cf162f8846660d8669ac5f992e7d49c0"
            },
        {
            title: "Cozy Cottage",
            description: "A house on hands",
            price: 210000,
            location: "Mumbai",
            imageURL: "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?size=626&ext=jpg&ga=GA1.1.1011931459.1710832452&semt=ais"
        },
        {
            title: "City View",
            description: "Buildings in City",
            price: 500000,
            location: "Bangalore",
            imageURL: "https://img.freepik.com/premium-photo/aerial-photography-modern-urban-architectural-landscape-suzhou_1417-13461.jpg?size=626&ext=jpg&ga=GA1.1.1011931459.1710832452&semt=ais"
        },
        {
            title: "Great Cottage",
            description: "A charming cottage in the countryside",
            price: 500000,
            location: "Indore",
            imageURL: "https://img.freepik.com/premium-photo/high-angle-view-buildings-city-against-sky_1048944-27845787.jpg?size=626&ext=jpg&ga=GA1.1.1011931459.1710832452&semt=ais"
        },
        {
            title: "Charming Cottage",
            description: "A charming cottage in the countryside",
            price: 550000,
            location: "Green Hills",
            imageURL: "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?w=1800&t=st=1710832461~exp=1710833061~hmac=308abb915cf6693bc70189925dada16d4eef225bc41093872f9debbff0c71ee2"
        },
        {
            title: "Wonderful House",
            description: "A charming cottage in the countryside",
            price: 510000,
            location: "Green Hills",
            imageURL: "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?w=1800&t=st=1710832461~exp=1710833061~hmac=308abb915cf6693bc70189925dada16d4eef225bc41093872f9debbff0c71ee2"
        },
        {
            title: "Cozy Cottage",
            description: "A charming cottage in the countryside",
            price: 520000,
            location: "Green Hills",
            imageURL: "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?w=1800&t=st=1710832461~exp=1710833061~hmac=308abb915cf6693bc70189925dada16d4eef225bc41093872f9debbff0c71ee2"
        },
        {
            title: "Great Hills View",
            description: "A countryside Hills view",
            price: 560000,
            location: "Hills View Hills",
            imageURL: "https://img.freepik.com/free-photo/chinese-city_1127-4129.jpg?size=626&ext=jpg&ga=GA1.1.1011931459.1710832452&semt=ais"
        },
        {
            title: "Modern House",
            description: "A modern home",
            price: 500000,
            location: "Green Hills",
            imageURL: "https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?w=2000&t=st=1710840481~exp=1710841081~hmac=ac4b32146cc5a0bd8b97d2061749fd3b52c1fe98bae10980a3faa88f08f83947"
        },
    ];

    Property.insertMany(mockData)
        .then(() => {
            console.log("Mock data inserted successfully");
            mongoose.disconnect();
        })
        .catch(err => console.error(err));

}).catch(err => console.error(err));

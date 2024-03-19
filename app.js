const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.error(err));

const express = require('express');
const app = express();
const cors = require('cors');

// app.use(cors());

app.use(cors({origin: '*'}));

// Define routes
app.use('/api/properties', require('./routes/properties'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

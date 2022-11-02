const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017/registration")
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
}

connectDB();
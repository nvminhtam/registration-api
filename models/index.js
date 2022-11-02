const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect("mongodb+srv://admin:9zd2gnCnxNmJWPYn@cluster0.qbshvc3.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
}

connectDB();
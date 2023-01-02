const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://0.0.0.0:27017/userinfo",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, result) => {
        if (err) console.log(err);
        else {
            console.log("Connection done with test database.");
        }
    });

const schema = new mongoose.Schema({
    _id: Number,
    username: String,
    course: String,
    purchaseDate: String
})

const Userdb = mongoose.model('user', schema);  //The first argument is the singular name of the collection your model is for.
module.exports = Userdb;
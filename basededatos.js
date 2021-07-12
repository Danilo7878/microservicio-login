const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alex:alexander123@cluster0.f3k1w.mongodb.net/Petroll?retryWrites=true&w=majority', {
    useNewUrlParser: true
}) 
    .then(db => console.log(`Base de datos conectada conectada en Mongo DB Atlas`))
    .catch(err => console.error(err));
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/News',
    { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://corgosinn:02194592660thiago@mongo_meubd:27017/meubd',
//   { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {
    console.log("Mongo succefull conected");

})

module.exports = mongoose;
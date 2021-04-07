const mongoose = require('mongoose');
const categories = new mongoose.Schema({
    _id: {type:String},
    clicks:{type:Number,default:0},
    parent: {type:String} 
})
const Categories = mongoose.model('categories',categories);

module.exports = Categories;
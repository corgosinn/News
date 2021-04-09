const mongoose = require('mongoose');

const postpage = new mongoose.Schema({
    cardchapeutitle: { type: String, required: true },
    cardbodytitle: { type: String, required: true },
    cardbodyresume: { type: String, required: true },
    metadata: { author: { type: String, required: true }, date: { type: Date, required: true, default: Date.now()} },
    cardimg: String,
    cardvideo: String,
    posttitle: { type: String, required: true },
    postsubtitle: { type: String, required: true },
    text: { type: String },
    midiatext: { type: String },
    text2: { type: String },
    midiatext2: { type: String },
    text3: { type: String },
    midiatext3: { type: String },
    citacao: { type: String },
    citacao1: { type: String },

    clicks:{type:Number,default:0},
    parent: {type:String} 

})


postpage.index({
    cardchapeutitle: 'text',
    cardbodytitle: 'text',
    cardbodyresume: 'text',
    
    posttitle: 'text',
    postsubtitle: 'text',
    text: 'text',
    text2: 'text',
    text3: 'text',
    citacao: 'text',
    citacao1: 'text',
    parent: 'text',
})

const News = mongoose.model('news', postpage);




module.exports = News;
const mongoose = require('mongoose');
const postpage = new mongoose.Schema({
    cardchapeutitle: { type: String, required: true },
    cardbodytitle: { type: String, required: true },
    cardbodyresume: { type: String, required: true },
    metadata: { author: { type: String, required: true }, date: { type: Date, required: true } },
    cardimg: String,
    cardvideo: String,
    posttitle: { type: String, required: true },
    postsubtitle: { type: String, required: true },
    text: { type: String, required: true }
})




const substitute = (doc)=>{
    const firstnotice = doc.length-1;
    const secondnotice = doc.length-2;
    const thirdnotice = doc.length-3;
    const later = doc.length-4;
    
    const itens = {chapeu: doc[firstnotice].cardchapeutitle,
        parent: doc[firstnotice].parent,
        id: doc[firstnotice]._id,
        title: doc[firstnotice].cardbodytitle,
        resume: doc[firstnotice].cardbodyresume,
        chapeu1: doc[secondnotice].cardchapeutitle,
        id1: doc[secondnotice]._id,
        parent1: doc[secondnotice].parent,
        cardimg1: doc[secondnotice].cardimg,
        title1: doc[secondnotice].cardbodytitle,
        resume1: doc[secondnotice].cardbodyresume,
        chapeu2: doc[thirdnotice].cardchapeutitle,
        id2: doc[thirdnotice]._id,
        parent2: doc[thirdnotice].parent,
        cardimg2: doc[thirdnotice].cardimg,
        title2: doc[thirdnotice].cardbodytitle,
        resume2: doc[thirdnotice].cardbodyresume,
        numberposts:later,
        doc:doc


    }

    return itens;
    
}

module.exports = { substitute }
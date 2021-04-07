const express = require('express');
const router = express.Router();
const Categories = require('../public/models/categories')
const News = require('../public/models/News')

const app = express();

router.get('/', async (req, res, next) => {
    await Categories.find({ _id: 'noticias' }).then(async dc => { if (dc.length > 0) { } else { next() } })
        .catch(err => next());
    await News.find().then(doc => {
        res.render('noticias.ejs', { doc: doc, document: doc[0], numberposts: doc.length - 1 })

    }).catch(err => next());
})


router.get('/:categories', async (req, res, next) => {
    let categories = req.params.categories;
    await Categories.find({ $or: [{ _id: categories } , { parent: categories }]}).then(async dc => { if (dc.length > 0) { } else { next() } })
    .catch(err => next());
await News.find({ parent: categories }).then(doc => {
    res.render('noticias.ejs', { doc: doc, document: doc[0], numberposts: doc.length - 1 })

}).catch(err => next());
    
})
router.get('/:categories/:subcategories', async (req, res, next) => {
    let categories = req.params.categories;
    let subcategories = req.params.subcategories;
    let document = await Categories.find({ parent: categories }).then(async dc => { if (dc.length > 0) { return await dc } else { next() } })
    await News.find({ parent: subcategories }).then(async doc => { if (doc.length > 0) { res.render('noticias.ejs', { doc: doc, document: doc[0], numberposts: doc.length - 1 }) } else { next() } })
        .catch(err => next());

})

router.get('/:categories/:id', async (req, res, next) => {
    let id = req.params.id;
    let categories = req.params.categories;
    await News.find({ _id: id, parent: categories }).then(doc => {
        res.render('newspage.ejs', { doc: doc, document: doc[0] })

    }).catch(err => next());
})



module.exports = router;
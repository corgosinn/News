const express = require('express');
const router = express.Router();
const routesnews = require('../routes/newsupdate');
const News = require('../public/models/News')
const Categories = require('../public/models/categories')
const path = require('path');
const routerCat = require('../controllers/category')



router.use(express.static(__dirname + 'public'));
router.use("/style", express.static(path.join(__dirname, '../' + "/public/style")));
router.use("/content", express.static(path.join(__dirname, '../' + "/public/content")));
router.use("/script", express.static(path.join(__dirname, '../' + "/public/script")));
router.use("/icons", express.static(path.join(__dirname, '../' + "/public/icon")));

var fs = require('fs');
const { networkInterfaces } = require('os');
var files = fs.readdirSync('./public/content');


router.get('/', async (req, res) => {
    let doc = await News.find().then(async dc => { return await dc })
    res.render("index", routesnews.substitute(doc))
})

router.get('/search', async (req, res, next) => {
    let id = req.query.q;
    
    let categories = req.params.categories;
    let doc = await News.find({ $text: { $search: id } }).then(async doc => {
        
        res.render('noticias.ejs', { doc: doc, document: doc[0], numberposts: doc.length - 1 })

    }).catch(err => next());
})




router.get('/post', (req, res) => {
    res.render('postpage.ejs', { files });
})

router.post('/post', express.urlencoded({ extended: true }), async (req, res) => {

    let post = new News(req.body);

    try {
        let doc = await post.save()
        console.log('Post Salvo')
        res.redirect('/')

    } catch (err) {
        console.log(err)
        res.send(err)
    }

})



function pagination(model) {
    return (req, res, next) => {
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;

        const results = {};
        if (endIndex < model.length) {

            results.next = {
                page: page + 1,
                limit: limit
            };
        }
        if (startIndex > 0) {

            results.prev = {
                page: page - 1,
                limit: limit
            };
        }
        results.results = model.slice(startIndex, endIndex);
        res.pagination = results;
    }
}

module.exports = router;
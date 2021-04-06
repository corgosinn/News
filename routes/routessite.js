const express = require('express');
const router = express.Router();
const routesnews = require('../routes/newsupdate');
const News = require('../public/models/News')
const path = require('path');









router.use(express.static(__dirname + 'public'));
router.use("/style", express.static(path.join(__dirname, '../' + "/public/style")));
router.use("/content", express.static(path.join(__dirname, '../' + "/public/content")));
router.use("/script", express.static(path.join(__dirname, '../' + "/public/script")));


router.get('/', async (req, res) => {
    let doc = await News.find().then(async dc => { return await dc })
    res.render("index", routesnews.substitute(doc))
})

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    await News.find({ _id: id }).then(doc => {
        res.render('newspage.ejs', { doc: doc, document: doc[0] })

    }).catch(err => next());
})

router.get('/post', (req, res) => {
    res.render('postpage.ejs');
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

module.exports = router;
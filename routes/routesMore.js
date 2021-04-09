const express = require('express');
const router = express.Router();
const routesnews = require('../routes/newsupdate');
const News = require('../public/models/News')
const Categories = require('../public/models/categories')
const path = require('path');
const routerCat = require('../controllers/category')

router.get('/sobre', async (req, res) => {
    
    res.render('sobrenos.ejs')
})

router.get('/ajudenos', async (req, res) => {
    
    res.render('ajudenos.ejs')
})

router.get('/politica', async (req, res) => {
    
    res.render('politica.ejs')
})
router.get('/contato', async (req, res) => {
    
    res.render('contato.ejs')
})
module.exports = router;
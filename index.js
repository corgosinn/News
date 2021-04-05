const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/newsupdate')

mongoose.connect('mongodb://localhost/News',
  { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://corgosinn:02194592660thiago@mongo_meubd:27017/meubd',
//   { useNewUrlParser: true, useUnifiedTopology: true });


const postpage = new mongoose.Schema({
  cardchapeutitle: { type: String, required: true },
  cardbodytitle: { type: String, required: true },
  cardbodyresume: { type: String, required: true },
  metadata: { author: { type: String, required: true }, date: { type: Date, required: true } },
  cardimg: String,
  cardvideo: String,
  posttitle: { type: String, required: true },
  postsubtitle: { type: String, required: true },
  text: { type: String, required: true },
  midiatext:{ type: String },
  text2:{ type: String },
  midiatext2:{ type: String },
  text3:{ type: String },
  midiatext3:{ type: String },
  citacao:{ type: String },
  citacao1:{ type: String }

})

const News = mongoose.model('news', postpage);

let post = new News({
  cardchapeutitle: 'asdasd',
  cardbodytitle: 'asds',
  cardbodyresume: 'asdasd',
  metadata: { author: 'aaaa', date: Date.now() },
  cardimg: '',
  cardvideo: '',
  posttitle: 'asdasdasd',
  postsubtitle: 'asdasd',
  text: 'asdasd'
})


app.set("views", path.resolve(__dirname, "public"));
app.set("view engine", "ejs");


app.use(express.static(__dirname + 'public'));
app.use("/style", express.static(__dirname + "/public/style"));
app.use("/content", express.static(__dirname + "/public/content"));
app.use("/script", express.static(__dirname + "/public/script"));

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log("Mongo succefull conected")

  app.get('/', async (req, res) => {
    let doc = await News.find().then(async dc => { return await dc })
    res.render("index", routes.substitute(doc))
  })

  app.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    await News.find({ _id: id }).then(doc => {
      res.render('newspage.ejs', { doc: doc, document: doc[0] })

    }).catch(err => next());

  })

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });



})
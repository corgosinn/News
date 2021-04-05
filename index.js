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
  text: { type: String },
  midiatext: { type: String },
  text2: { type: String },
  midiatext2: { type: String },
  text3: { type: String },
  midiatext3: { type: String },
  citacao: { type: String },
  citacao1: { type: String }

})

const News = mongoose.model('news', postpage);

let post = new News({
  cardchapeutitle: 'Musicando Formiga',
  cardbodytitle: 'Edital é lançado para premiar profissionais do setor cultural em Formiga',
  cardbodyresume: 'Objetivo é conceder prêmios para até 70 profissionais que tenham atividade principal diretamente ligada à realização de eventos musicais. Inscrições serão realizadas do dia 19 até dia 23 de abril.',
  metadata: { author: 'Corgosinho', date: Date.now() },
  cardimg: '/content/pub1.webp',
  cardvideo: '',
  posttitle: 'Edital é lançado para premiar profissionais do setor cultural em Formiga',
  postsubtitle: '"Musicando Formiga" vai conceder prêmios para até 70 profissionais que tenham atividade principal diretamente ligada à realização de eventos musicais. Inscrições serão realizadas do dia 19 até dia 23 de abril.',
  text: 'Imagem',
  midiatext: '/content/pub1.webp',
  text2: 'Um edital para premiação de profissionais do setor cultural foi publicado pela Prefeitura de Formiga. O objetivo do "Musicando Formiga" é conceder prêmios para até 70 profissionais que tenham atividade principal diretamente ligada à realização de eventos musicais. As inscrições serão realizadas pelo e-mail musicandoformiga@gmail.com do dia 19 até dia 23 de abril.Segundo o edital, publicado no site da Prefeitura, podem participar profissionais que tiveram as atividades profissionais suspensas pelas medidas de combate à Covid- 19: músicos profissionais, bailarinos de bandas e profissionais da área técnica como roadies, técnicos de som ou de luz, e montadores de estrutura de palco.Os participantes devem morar em Formiga e precisam comprovar que, no mínimo 75 % de renda mensal média em 2019, foi proveniente de trabalhos no setor de shows musicais.De acordo com a categoria profissional, os premiados realizarão atividades como contrapartida, conforme cronograma a ser elaborado pela cidade em locais públicos também a serem definidos.Segundo o secretário de Cultura, Alex Arouca, as histórias da vida profissional de cada artista e técnico serão reunidas em uma revista eletrônica que será feita pela da Secretaria de Cultura."Após a passagem dessa pandemia, quando os eventos públicos voltarem a ser realizados, a população da cidade será agraciada com uma série de eventos que levará entretenimento aos cidadãos, em diversas partes do município", disse.',
  midiatext2: '',
  text3: '',
  midiatext3: '',
  citacao: '',
  citacao1: '',
  links: {}
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
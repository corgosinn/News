const db = require('./public/models/db');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.set("views", path.resolve(__dirname, "public"));
app.set("view engine", "ejs");


// app.use('*', (req, res, next) => { 
//   if (req.headers['x-forwarded-proto'] == 'https'){
//     next()
//   }else{
//     res.redirect('https://' + req.headers.host + req.originalUrl)
//   }
// })

const routes = require('./routes/routessite');
const categoriesRoutes = require('./routes/categoriesRoutes');
const routesMore = require('./routes/routesMore');

app.use('/', routes);
app.use('/mais', routesMore);
app.use('/noticias', categoriesRoutes)

// app.use('*',(req,res,next)=>{
//   res.redirect('https://portalj1.com.br');
// })


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

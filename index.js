const db = require('./public/models/db');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.set("views", path.resolve(__dirname, "public"));
app.set("view engine", "ejs");


const routes = require('./routes/routessite');
const categoriesRoutes = require('./routes/categoriesRoutes');
const routesMore = require('./routes/routesMore');

app.use('/', routes);
app.use('/mais', routesMore);
app.use('/noticias', categoriesRoutes)



app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

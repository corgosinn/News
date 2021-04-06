const db = require('./public/models/db');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');


app.set("views", path.resolve(__dirname, "public"));
app.set("view engine", "ejs");


const routes = require('./routes/routessite');

app.use( '/' , routes );

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
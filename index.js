const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./routes/autoRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
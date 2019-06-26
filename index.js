require('dotenv').config();
const express = require('express');
let app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

/*****************************************
 * Ponder 08
*****************************************/
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => res.send('Got a POST request'));
app.put('/', (req, res) => res.send('Got a PUT request at /user'));
app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'));

/*****************************************
 * Ponder 09
*****************************************/
app.use(require('./ponder_modules/Ponder09/route.js'));

/*****************************************
 * Team Activity 09
*****************************************/
app.use(require('./team_modules/TeamActivity09/route.js'));

/*****************************************
 * Team Activity 10
*****************************************/
app.use(require('./team_modules/TeamActivity10/route.js'));
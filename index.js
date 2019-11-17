const express = require('express');
const path = require('path');
// require('dotenv').config();

let app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost: ${PORT}`)
})
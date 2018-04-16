const path = require('path');
const express = require('express');

const { rootPath } = require('../utills');
const publicPath = path.join(rootPath, '/public');
const port = process.env.PORT || 3000;

const App = express();
App.use(express.static(publicPath));

App.get('/', (req, res) => {
    res.render('index.html');
});
App.listen(port, () => {
    console.log('app is running on port 3000');
});
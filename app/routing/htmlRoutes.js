const path = require('path');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    app.get('/friends', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/friends.html"))
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/404.html"))
    })
}
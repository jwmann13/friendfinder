let users = require('../data/friend')
let questions = require('../data/questions')

module.exports = function(app) {

    app.get("/api/friends", (req, res) => {
        res.json(users);
    });

    app.get("/api/questions", (req, res) => {
        res.json(questions);
    });

    app.post("/api/friends", (req, res) => {
        users.push(req.body);
        res.json(true)
    })

    return console.log('Im using this ' + app)
}
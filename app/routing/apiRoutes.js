let users = require('../data/friend')

module.exports = function(app) {

    app.get("/api/friends", (req, res) => {
        res.json(users);
    });

    app.post("/api/friends", (req, res) => {
        users.push(req.body);
        res.json(true)
    })

    return console.log('Im using this ' + app)
}
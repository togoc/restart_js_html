const express = require('express')
const app = express()


app.use('/', express.static(__dirname + '/public/static'))

var dictionary = {
    a: ['apple', 'and', 'all'],
    b: ['battle', 'bear', 'back'],
    c: ['cat', 'can', 'common']
}

app.get("/search", function (req, res) {
    console.log(req.query)
    console.log(dictionary[req.query.kw])
    var t = `${req.query.cb}(${JSON.stringify(dictionary[req.query.kw] == undefined ? [] : dictionary[req.query.kw])})`
    console.log(t)
    res.send(t)
})

app.listen(8080, () => {
    console.log('app on 8080')
})
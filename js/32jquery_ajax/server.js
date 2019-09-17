const express = require('express')
const app = express()

// 在Express 中 没有内置获取表单POST请求体的API，这里我们需要使用一个第三方的包 ：body-parser
//req.body 识别
// var bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({ extende: true }));
// app.use(bodyparser.json())

app.use('/', express.static(__dirname + '/static'))

var dictionary = {
    a: ['apple', 'and', 'all'],
    b: ['battle', 'bear', 'back'],
    c: ['cat', 'can', 'common']
}

app.get("/search", function (req, res) {
    console.log(req.query)
    res.send('get is ok !')
})

app.post("/search", function (req, res) {
    console.log(req.body)
    res.send('post is ok !')
})

app.listen(8080, () => {
    console.log('app on 8080')
})
const fs = require('fs');
const express = require('express');

const app = express();

//req.body 识别
// var bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({ extende: true }));
// app.use(bodyparser.json())

app.use('/', express.static(__dirname + '/public'));

//跨域
app.use(require('cors')());



app.get("/get", function (req, res) {
    console.log(app)
    res.send("get is all ready !!!")

});

app.post("/post", function (req, res) {
    console.log(req.body)
    res.send("post is all ready !!!")
});


app.listen(80, () => {
    console.log("App is listening on 80")
})
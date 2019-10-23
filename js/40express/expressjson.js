const path = require("path")
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express.json(options)
// https://cloud.tencent.com/developer/section/1489347
// let options = {
//         type: "application/x-www-form-urlencoded",
//         strict: true
//     }
// /
// app.use(express.json(options)) //默认type:"application/json"   这玩意不好用传递的必须是JSON.stringify()过来的不然容易报错

// express.static(root, options)
// let staticOptions = {
//     dotfiles: 'ignore', //确定如何处理点文件（以“ . ”开头的文件或目录）。请参阅下面的dotfiles。
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: "index.html", //发送指定的目录索引文件。设置为false以禁用目录索引。Mixed “index.html”
//     maxAge: '1d', //以毫秒为单位设置Cache-Control标头的max-age属性或以ms格式设置字符串。
//     redirect: true, //当路径名称是目录时,是否重定向到尾随“/”。Boolean
//     setHeaders: function(res, path, stat) {
//         // console.log(path)
//         res.set('x-timestamp', Date.now())
//     }
// }
// app.use(express.static('public', staticOptions))
/**
 * 跟这个差不多 app.use("/", express.static("public")) 多了一些选项
 */

//一旦设置，app.locals属性的值将在应用程序的整个生命周期中持续存在，而res.locals属性只对请求的生命周期有效。
// console.log(app.locals.title)
// console.log(app.locals.email)





//用户界面,引进模块,如果引进的是一个路径,那么默认访问的是这个目录下的index.js文件
app.use('/user', require('./parts/user'));
//列表界面,引进模块
app.use('/list', require('./parts/list'));
// app.use("/js", express.static("/js"))
console.log(path.resolve("public/"))
console.log(path.resolve("../public/"))
    // app.use("/", express.static(path.resolve("public/")))
    // app.use("/", express.static("public"))
app.use("/", express.static("./"))
app.use("/js", express.static("js"))

// app.use((req, res) => {

//     console.log(req.url)
//     console.log(req.body)
//     res.send("ok")

// })

app.post("/post", (req, res) => {
    console.log(req.url)
    console.log(req.headers)
    console.log(req.body)
    res.send("ok")
})
app.get("/get", (req, res) => {
    console.log(req.query)
    res.send("ok")
})


app.get("/test", (req, res) => {
    res.send("ok")
})

app.listen(8087, () => {
    console.log("running 8087")
});
function log() {
    return console.log.apply(this, arguments)
}
// const http = require('http')

// const server = http.createServer()

// server.on("request", (req, res) => {
//     log("我来了")
//     console.log(req.headers)
//     res.end("ok")
// })

// server.listen(8080, () => {
//     console.log("服务器开始运行在 8080~!")
// })

const express = require("express")
const app = express()

//子路由
app.use(require("./path/router"))

app.get("/download", (req, res) => {
    // res.redirect(Path)
    // res.download("server.js")
})
app.listen(3000, () => {
    console.log("3000")
})
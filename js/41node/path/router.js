const express = require("express")
const router = express.Router()

router.get("/login", (req, res) => {
    res.send("这是子路由登录")
}).get("/register", (req, res) => {
    // res.send("这是子路由注册")
    res.send({name:12})
})


module.exports = router
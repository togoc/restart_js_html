const express = require('express');
let user_router = express.Router();

user_router.get('/', (req, res) => {
    res.send('这个是用户界面的根目录');
    res.end();
})
user_router.get('/login', (req, res) => {
    res.send('这个是用户的登录界面');
    res.end();
})
user_router.get('/register', (req, res) => {
    res.send('这个是用户的注册界面');
})

//引入子模块
user_router.use('/vip', require('./vip'));

//输出模块
module.exports = user_router;
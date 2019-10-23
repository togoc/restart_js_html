const express = require('express');
let vip_router = express.Router();
vip_router.get('/', (req, res) => {
    res.send('这个是vip的根目录');
    res.end();
})
vip_router.get('/login', (req, res) => {
    res.send('这个是vip的登录');
    res.end();
})

module.exports = vip_router;
let express = require('express');
let list_router = express.Router();


list_router.get('/', (req, res) => {
    res.send('这个是列表的根目录');
    res.end();
})
list_router.get('/main', (req, res) => {
    res.send('这个是列表展示的主页');
    res.end();
})

//输出模块
module.exports = list_router;
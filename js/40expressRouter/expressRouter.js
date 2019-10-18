const express = require('express');
let app = express();
app.listen(8087, () => {
    console.log("running 8087")
});
//用户界面,引进模块,如果引进的是一个路径,那么默认访问的是这个目录下的index.js文件
app.use('/user', require('./parts/user'));
//列表界面,引进模块
app.use('/list', require('./parts/list'));
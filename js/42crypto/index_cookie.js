// domain: 域名。设置子域名（二级域名）是否可以访问cookie。 例：domain:'.主域名' name=value：键值对，可以设置要保存的 Key/Value，注意这里的 name 不能和其他属性项的名字一样
// expires： 过期时间（秒），在设置的某个时间点后该 Cookie 就会失效，如 expires=Wednesday, 09-Nov-99 23:12:40 GMT
// maxAge： 最大失效时间（毫秒），设置在多少后失效
// secure： 当 secure 值为 true 时， cookie 在 HTTP 中是无效，在 HTTPS 中才有效
// path： 表示 cookie 影响到的路由，如 path=/。如果路径不能匹配时，浏览器则不发送这个 Cookie
// httpOnly：默认为false,建议设置为true, 客户端将无法通过document.cookie读取到 COOKIE 信息，可防止 XSS 攻击产生
// signed： 表示是否签名（加密） cookie, 设为 true 会对这个 cookie 签名，这样就需要用res.signedCookies 访问它,前提需要设置上面中间件app.use传参 。未签名则用 res.cookies 访问
// 被篡改的签名 cookie 会被服务器拒绝，并且 cookie值会重置为它的原始值
//设置cookie
let options = {
    httpOnly: true, //是否允许在客户端设置cookie
    maxAge: 200000, //
    signed: true //数字签名,保证不被篡改(无法读取)
}
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

// 初始化中间件，传入的第一个参数为singed secret
app.use(cookieParser('secret'));

app.use(function (req, res, next) {
  console.log(req.signedCookies); // chyingp
  next();
});

app.use(function (req, res, next) {  
  // 传入第三个参数 {signed: true}，表示要对cookie进行摘要计算
  res.cookie('nick', 'chyingp', options);
  res.end('ok');
});

app.listen(8080);
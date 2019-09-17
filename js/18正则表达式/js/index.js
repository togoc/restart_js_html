//1.字面量的方式
var reg = /abc/
//2.构造函数
var reg = RegExp("abc")
console.log(reg) // /abc/
// test方法 含有符合规则的字串 返回true 否则 false

var str = "abc"
console.log(reg.test(str)) //true
var str = "ab"
console.log(reg.test(str)) //false


//修饰符 i忽略大小写  g全局

//match 方法 字符串
var reg = /abc/g
var str = "abcabc"
console.log(str.match(reg)) //返回数组 ["abc", "abc"]

var reg = /abc/
var str = "abcabc"
console.log(str.match(reg)) //返回数组 ["abc", index: 0, input: "abcabc", groups: undefined]
//search 方法返回符合规则字串位置(第一个匹配的位置)
var reg = /abc/
var str = "abcabc"
console.log(str.search(reg)) //0


// .  一个除了换行符之外的所有单个字符
// .+ 无限个除了换行符之外的所有单个字符
var reg = /g.+gle/ig
var str = "g*ggfdgdfdfgogle"
console.log(reg.test(str), str.match(reg)) //true
console.log("-------------------------------------") //true

// * 重复多次匹配,匹配任意次(0 ~ n)( * 前面的字符多次匹配)
var reg = /g*gle/ig  // 表示匹配  0-n 个g + gle 
var str = "g00000000000000gle"
console.log(reg.test(str), str.match(reg)) //true

// 至少有一次重复匹配( + 前面的字符多次匹配)
var reg = /g+gle/  // 至少有一个g + gle
var str = "ggg1ggggle"
console.log(reg.test(str), str.match(reg)) //true

// 进行 0或者1次匹配( ? 前面的字符多次匹配)
var reg = /g?gle/ig //0 个或者 1个 g + gle
var str = "ggle"
console.log(reg.test(str), str.match(reg)) //true  ["ggle"]

//{m,n} 至少匹配m次 至多匹配n次 {m,} {m} ( {2,4} 前面的字符多次匹配)
var reg = /g{2,4}le/ig //[a-z]
var str = "gggggle"
console.log(reg.test(str), str.match(reg)) //true ["ggggle"]

// []表示范围
var reg = /[0-9]/ig //[a-z]
var str = "ggg1gle"
console.log(reg.test(str), str.match(reg)) //true ["1"]

// \w 表示数字字母下划线 [0-9a-zA-Z]  \W(大写)非数字字母下划线 
// \d表示数字[0-9] \D 非数字
// \s 匹配空格
var reg = /\w+/ig //[a-z]
var str = "1111sad"
console.log(reg.test(str), str.match(reg)) //true ["1111sad"]


// /^匹配开始   $/匹配结尾
var reg = /^g.+g$/ig //[a-z]
var str = "g.dsadasdasg"
console.log(reg.test(str), str.match(reg)) //true ["g.dsadasdasg"]

var reg = /\.g$/ig //[a-z]
var str = "g.gdsadasdas.g"
console.log(reg.test(str), str.match(reg)) //true [".g"]

// | 或
var reg = /baidu|google|yahoo/
var str = "www.baidu.com"
console.log(reg.test(str), str.match(reg)) //true ["baidu", index: 4, input: "www.baidu.com", groups: undefined]
//()分组将内容作为一个整体进行匹配(不清楚)
var reg = /(google)/
var str = "googlegooglegoogle"
console.log(reg.test(str), str.match(reg))

// $1  $2
var reg = /(.*)\s(.*)/
var str = "baodu taobao"
console.log(reg.test(str), RegExp.$1, RegExp.$2) //true "baodu" "taobao"


//页面大小修改
function changeWidth() {
    function move(e) {
        var defaultWidth = parseInt(getComputedStyle(part1)["width"])
        var ev = e || event
        var max_width = document.documentElement.clientWidth;
        var width = ev.pageX;
        (width + 500 >= max_width) && (width = max_width - 500);
        (width <= 300) && (width = 300);
        part1.style.width = width + 'px'
        part1_outer.style.width = width + 'px'
    }
    function bind() {
        part1.style.userSelect = 'none';
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move)
            part1.style.userSelect = 'auto';
        })
    }

    var changewidth = document.querySelector('.changewidth')
    var part1 = document.querySelector('.part1')
    var part1_outer = document.querySelector('.part1_outer')
    changewidth.addEventListener('mousedown', bind)
}


window.onload = function () {
    changeWidth();
}
function log() {
    if (process.env.user === "togoc") {
        return console.log.apply(this, arguments)
    }
}
// console.log(process.env) //当前系统信息(变量)

// console.log(process.argv) //获取命令行参数
// let num1 = process.argv[2]
// let num2 = process.argv[3]
// let sum = Number(num1) + Number(num2)
// setTimeout(() => {
//     console.log(sum)
// }, 1000);

//path 路径处理(无论什么系统都适用)
// const path = require("path")
// const myPath = path.join(__dirname, "//one//", "two", "//tree")
//C:\Users\togoc\Desktop\restart_js_html\js\41node\one\two\tree
// console.log(myPath)
//根据相对路径,返回绝对路径
//对程序来说 ./xxx.js 转换从绝对路径
// const str = ".//abc///index.js"
// console.log(path.resolve(str))
//C:\Users\togoc\Desktop\restart_js_html\js\41node\abc\idnex.js
//接收路径转换成对象
// let obj = path.parse(str)
// console.log(obj) //ext和name都是根据base生成的(修改base才能修改)
/**
 * { root: '',
  dir: './/abc//',
  base: 'idnex.js',
  ext: '.js',
  name: 'idnex' }
 */
// console.log(path.format(obj))
//  ".//abc///index.js"

//fs 文件读写
const fs = require("fs")

//异步
// fs.readFile("./newfile/01.txt", "utf8", function(err, data) {
//     if (err) throw err;
//     console.log(data.toString("utf8")) //参数默认是utf8 "大家好!",也可以在之前传入参数
//     console.log(data) //Buffer
// })

// {flag:"a"} 表示追加,没有则覆盖
// fs.writeFile("./newfile/04.txt", "hello world",{flag:"a"}, function(err) {
//     //不存在会新建文件
// if (err) throw err;
//     console.log("写入完成")
// })
// 追加 appendFile("path",data,callback)
// fs.appendFile('./newfile/04.txt', "123", (err) => {
//     if (err) throw err;
//     console.log("写入完成")
// })

//同步
// console.log(fs.readFileSync("./newfile/04.txt"))
const path = require("path")
if (process.argv[2]) {
    let str = path.resolve(process.argv[2])
        // console.log(str)
        // try {
        //     /**
        //      * http://nodejs.cn/api/fs.html#fs_fs_access_path_mode_callback
        //      * fs.constants.F_OK 是否存在
        //      * fs.constants.W_OK | fs.constants.R_OK 是否有读写权限
        //      */
        //     fs.access(str, fs.constants.F_OK, (err) => {
        //         if (err) {
        //             console.log("文件不存在")
        //             return
        //         }
        //         fs.stat(str, (err, stats) => {
        //             if (err) {
        //                 console.log(err.code)
        //                 return
        //             }
        //             if (stats.isDirectory()) {
        //                 console.log("是文件夹")
        //                 fs.readdir(str, (err, data) => {
        //                     if (err) throw err;
        //                     console.log(data)
        //                 })
        //             }
        //             if (stats.isFile()) {
        //                 console.log("是文件")
        //                 fs.readFile(str, "utf8", (err, data) => {
        //                     if (err) throw err;
        //                     console.log(data)
        //                 })
        //             }
        //         })
        //     })
        // } catch (err) {
        //     console.log("不存在")
        //     console.log(err)

    // }

    // 遍历所有文件
    function readAll(str) {
        let arr = {}
        rsort(path.resolve(str))

        function rsort(str) {
            fs.access(str, fs.constants.F_OK, (err) => {
                if (err) {
                    console.log("文件不存在")
                    return
                }
                fs.stat(str, (err, stats) => {
                    if (stats.isDirectory()) {
                        fs.readdir(str, (err, files) => {
                            for (let i = 0; i < files.length; i++) {
                                rsort(path.resolve(path.join(str, files[i])))
                            }
                            // files.forEach(file =>{rsort(path.resolve(path.join(str, files[i])))})
                        })
                    }
                    if (stats.isFile()) {
                        path.parse(str).base
                        arr[path.parse(str).base] = str
                    }
                    log(arr)
                })

            })
        }

    }
    // readAll(str)
}



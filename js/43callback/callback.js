function People(name) {
    this.name = name
}


People.prototype = {
    /**
     * 
     * @param {function} callbackfn 传入一个函数处理内容
     */
    say: function(callbackfn) {
        for (let i = 0; i < this.name.length; i++) {
            callbackfn(this.name[i], i, this)
        }
    }
}

let p = new People("tgc")

p.say(function(s, index, str) {
    console.log(s)
})
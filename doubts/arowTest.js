// 'use strict'

// function test(){
//     console.log(this) // undefined since 'use strict' used
// }

// const testArrow = ()=>{
//     console.log(this) //{}
// }

// test()
// testArrow()

// comment
const p = {}
const obj = {
    a() {
        // let that = this
        console.dir(this)
        return function () {
            console.dir(this)
        }

    }
}
obj.a()()

console.log(this)
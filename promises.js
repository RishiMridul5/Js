// Method - 1
function print1() {
    new Promise(res => res('a'))
        .then((m) => {
            console.log(m)
            new Promise(res => res('b'))
                .then((m) => {
                    console.log(m)
                    new Promise((res, rej) => {
                        setTimeout(() => {
                            res('c')
                        }, 3000);
                    })
                        .then(
                            (m) => {
                                console.log(m)

                                new Promise((res, rej) => {
                                    setTimeout(() => {
                                        res('d')
                                    }, 0);

                                }).then(m => {
                                    console.log(m)
                                    console.log(m)

                                    new Promise(res => res('e')).then(m => console.log(m))
                                })
                            }

                        )
                })
        })
}


async function print2() {
    let p1 = await new Promise(res => res('a'))
    console.log(p1)


    let p2 = await new Promise(res => res('b'))
    console.log(p2)

    let p3 = await new Promise((res, rej) => {
        setTimeout(() => {
            res('c')
        }, 3000);
    })
    console.log(p3)

    let p4 = await new Promise((res, rej) => {
        setTimeout(() => {
            res('d')
        }, 0);

    })
    console.log(p4)

    let p5 = await new Promise(res => res('e'))
    console.log(p5)

    console.log('\n')
}
// print2()





async function print3() {

    console.log('a');
    console.log('b');
    await new Promise((res) => {
        setTimeout(() => {
            console.log('c')
            res()
        }, 3000)
    })
    await new Promise((res) => {
        setTimeout(() => {
            console.log('d')
            res()
        }, 0)
    })

    await new Promise(res => {
        console.log('e')
        res()
    })
}
// print3()


async function f(){

    return Promise.resolve(1)
}

f().then(m => console.log(m))
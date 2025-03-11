function a() {
    b()
    console.log("a")
}

function b() {
    c()
    console.log("b")
}
console.log("hello")

setTimeout(() => {
    console.log("ami setTimeout")
},3000)


setTimeout(() => {
    console.log("ami setTimeout2")
}, 3000)


function c() {
    d()
    console.log("c")
}
function d() {
    e()
    console.log("d")
}
function e() {
    console.log("e")
}

a()

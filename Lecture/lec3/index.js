let events = require('events')
const { emitWarning } = require('process')

var em = new events.EventEmitter()

var callme = function(){
    console.log("Hello, I am from event handler")
}

em.on("hello", callme)
em.on("hug", (data) => {
    console.log(`sending ${data} hug`)
})

em.emit("hello")

em.emit("hug", "BIG")

em.emit("hello")

em.emit("helo")

//--way-2
em.addListener("bye", () => {
    console.log("Byeee.....")
})

em.emit("bye")

em.once("hi", () => {
    console.log("I am one time")
})


em.emit("hi")
em.emit("hi")
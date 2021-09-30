//console.log("Hello Wold")

let arit = require('./arithmetics.js')
let collg = require('./college.js')

//Core module
let os = require('os')

let sum = arit.addition(10, 20)
console.log(`SUM : ${sum}`)

let sub = arit.sub(10,20)
console.log(`SUB : ${sub}`)

console.log(`Today's Date: ${arit.today}`)

let p = new collg.Person("Harsh", "Patel")
p.display()

let s = new collg.Student(101243993, "Harsh", "Patel")
s.display()

console.log(collg.college_name)

//Display all inside modules
//console.log(collg)
//console.log(arit)
//console.log(os)


//Use os core module
console.log("Architecture : " + os.arch())
console.log("Platform : " + os.platform)
console.log("Free memory (gb) : " + os.freemem() / 1024 /1024)
console.log("Free memory (mb) : " + os.freemem() / 1024)
console.log("Free memory (kb) : " + os.freemem())


let http = require('http')
let student = require('./student')
let fs = require('fs')

const SERVER_PORT = 8089
var server = http.createServer((req, res) => {

    //console.log(req)
    if(req.url == '/'){
        res.write("<h1>Welcome to NodeJS server example</h1>")
        res.end()
    }
    if(req.url == '/name'){
        res.write("<h1>My name is <h2>Harsh Patel</h2></h1>")
        res.end()
    }

    if(req.url == '/collegename'){
        res.end("<b>George Brown College<b>")
    }

    if(req.url == '/student'){
        //convert JSON object to JSON string
        let s = JSON.stringify(student)
        res.write(s)
        res.end()
    }

    if(req.url == '/user'){
        //Read JSON file
        fs.readFile(__dirname + "/user.json", "utf-8", (error, data)=>{
            res.write(data)
            res.end()
        })
    }


}).listen(SERVER_PORT)

console.log("Server running at port http://localhost:" + SERVER_PORT)

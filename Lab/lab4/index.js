let express = require('express')
let app = express()

//Middleware
//http://local:8089/index.html
//http://local:8089/hello.html
//app.use(express.static('public))
//app.use(express.static('public'))
app.use("/static",express.static('public'))

//http://localhost:8089/
app.get("/",(req,res) => {
    res.send("<h1>Hello Express Server</h1>")
})

//http://localhost:8089/hello
app.get("/hello",(req,res) => {
    res.send("<h1>Hello, GET</h1>")
})

//use POSTMAN
//http://localhost:8089/hello 
app.post("/hello",(req,res) => {
    res.send("<h1>Hello, POST</h1>")
})

//use POSTMAN
app.delete("/hello",(req,res) => {
    res.send("<h1>Hello, DELETE</h1>")
})
//POSTMAN
app.patch("/hello",(req,res) => {
    res.send("<h1>Hello, PATCH</h1>")
})

//query string = http://localhost:8089/name?fnm=Harsh&lnm=Patel
app.get("/name", (req,res) => {
    let FirstName = req.query.fnm
    let LastName = req.query.lnm
    let city = req.query.city

    let FullName = `${FirstName}, ${LastName} lives in ${city}`
    
    //Create JS object
    response = {
        status:"success",
        FirstName,
        LastName,
        city,
        FullName
    }

    res.send(response)
})

//Route Path Parameter
//http:localhost:8089/name/Harsh/Patel/London
app.get("/name/:fnm/:lnm/:city", (req,res) => {
    let FirstName = req.params.fnm
    let LastName = req.params.lnm
    let city = req.params.city
    let FullName = `${FirstName}, ${LastName} lives in ${city}`
    
    //Create JS object
    response = {
        status:"success",
        FirstName,
        LastName,
        city,
        FullName
    }

    res.send(response)
})


//Allow only FIVE digits
//localhost:8089/student/12345

app.get("/student/:student/:sid([0-9]{5})", (req, res) => {

    let student = req.params.student
    let stud_id = req.params.sid
    response = {
        student : student,
        stud_id : req.params.sid
    }

    res.send(response)

})

//routes string = http://localhost:8089/name/Harsh/Patel

let server = app.listen(8089, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server running  at http://localhost:%s", port)
})
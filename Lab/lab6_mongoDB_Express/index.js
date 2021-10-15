let express = require('express')
let mongoose = require('mongoose')
let StudentModel = require('./models/Student')

let app = express()

mongoose.connect('mongodb+srv://harshpatelhp7:DOGEtomoon2021@comp3123.h9dis.mongodb.net/db_f2021_3123?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.get("/", (req,res) => {
    res.send("<h1>MongoDB Mongoose Example</h1>")
})

//Insert new student
app.get("/add", async(req,res) => {

    let s = {
        first_name: "Harsh",
        last_name: "Patel 2",
        total: 50,
        result:"PASS"
    }

    let new_student = new StudentModel(s)

    try{
        await new_student.save(s)
        console.log("Student Record Saved")
        res.status(200).send("Student Record Saved.")
    
    }catch(err){
        console.log("ERROR: Student Record saved: " + err);
        res.status(500).send(err)
    }
})

app.get("/students", async(req, res) => {
    
    //const s = await StudentModel.find({})
    //const s = await StudentModel.find({}, "first name")
    //const s = await StudentModel.find({total : 100}, "first_name total")
   
    //sorting on total
    const s = await (await StudentModel.find({total:{$gt:100}}, "first_name total"))

    try{
        res.send(s)
    }catch(err){
        console.log("Error: " + err)
        res.status(500).send(err)
    }

})

app.listen(8089, () => {
    console.log("Server Running at http://localhost:8089/")
})
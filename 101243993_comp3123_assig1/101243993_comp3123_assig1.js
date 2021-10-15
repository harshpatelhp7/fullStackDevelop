let express = require('express')
let fs = require('fs')
let app = express()
let user = require('./users.json')

app.get('/',(req,res) => {
    res.send("Assignment-1 by <b>Harsh Patel<b>");
})

app.get('/user',(req,res) => {
    let userId = req.query.uid - 1;
       
    try{
        if(user[userId].id){
            response = {
                "id" : user[userId].id,
                "name" : user[userId].name,
                "email" : user[userId].email,
                "address" : `${user[userId].address.street},${user[userId].address.city},${user[userId].address.zipcode}`, 
                "phone" : user[userId].phone
            }
            res.send(response);
        }
    }catch{
        err = {
            "message" : "No user found"
        }
        res.send(err);
    }
})

app.get('/users/all', (req,res) => {
    res.send(user,user,user.sort((a,b) => {
        if ( a.username < b.username ){
            return -1;
          }
          if ( a.username > b.username ){
            return 1;
          }
          return 0;
        })
    )})


app.listen(8082,() => {
    console.log("Server Running at http://localhost:8082");
})
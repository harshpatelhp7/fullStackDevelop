var http = require("http");
const { stringify } = require("querystring");

//TODO - Use Employee Module here
let emp = require('./Employee.js');

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
            res.end();
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            let emp_string = JSON.stringify(emp.employees);
            res.write(emp_string)
            res.end();
        }

      if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            let emp_array = []
                
            for(let x = 0; x < emp.employees.length; x++){
                emp_array[x] = (`${emp.employees[x].firstName} ${emp.employees[x].lastName}`)
            }
            names = JSON.stringify(emp_array.sort());
            res.write(names);
            res.end();  
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            emp_salaries = [];
            sum = 0;

            //making an array of only the salaries
            for(let x = 0; x < emp.employees.length; x++){
                emp_salaries[x] = (emp.employees[x].Salary) 
            }

            //finding sum of all salaries using callback func
            sum = emp_salaries.reduce(function(a,b){
                return a + b;
            }, 0);

            res.write(`total_salary : ${sum}`); 
            res.end();  
    }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})
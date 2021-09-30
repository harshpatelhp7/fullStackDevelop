
let p1 = new Promise((resolve, reject) => {
    if(1 == 1){
        resolve("---success---")
    }else{
        reject("---errors---")  
    }
})

p1.then(function(resolve){
    console.log(resolve)
}, function(error){
    console.log(error)
})


p1.then(
    success => console.log(success),
    error => console.log(error)
)

successHandler = success => console.log(success)
errorHandler = error => console.log(error)

// User outside functions
p1.then(
    successHandler,
    errorHandler
)

//Useif
p1.then(successHandler)
    .catch(errorHandler)

    
p1.then(success => { 
    console.log("S1 : " +success)
    return success.toUpperCase()
    })
    .catch(error => {
        console.log("E1: " + error)
        throw error
    })
    .then(data => {
        console.log("S2 : " + data)
        return { data, name: "Harsh"} //Returns object to the next then
    })
    .then(data => console.log("S3 : " +data.name))
    .catch(error => console.log("E2 : " + error))
    .finally(() => console.log("I am in finally block"))
    
    
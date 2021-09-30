function sayHello(){
    console.log("Hello Wolrd")
}

greet = (name) => {
    console.log(`Welcome, ${name}`)
}

function myCallBack(callback){
    callback();
}

myCallBack(sayHello)


function myCallBackGreet(name, callback){
    callback();
}

myCallBackGreet("Harsh", greet)

function myCallBackGreetNEW(n, name, hello, greeting){
    if(n == 1)
        greeting(name);
    else
        hello()
}

myCallBackGreetNEW(1, "Harsh", sayHello, greet)
myCallBackGreetNEW(2, "Harsh", sayHello, greet)

myCallBackGreetNEW(2, "Harsh", () => {console.log("I am directly called"), greet
} )


function myCallBackGreetNEW(n, name, hello, greeting){
    if(n == 1)
        greeting(name);
    else
        hello()
}


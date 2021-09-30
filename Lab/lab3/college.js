module.exports.college_name = "Georgebrown"
class Person{
    constructor(fnm, lnm){
        this.first_name = fnm
        this.last_name = lnm
    }

    display(){
        console.log(`First Name: ${this.first_name}`)
        console.log(`Last Name: ${this.last_name}`)
    }
}

module.exports.Person = Person

module.exports.Student = class{
    constructor(sid, fnm, lnm){
        this.first_name = fnm
        this.last_name = lnm
        this.student_id = sid
    }

    display(){
        console.log(`First Name: ${this.first_name}`)
        console.log(`Last Name: ${this.last_name}`)
        console.log(`Student Id: ${this.student_id}`)
    }
}
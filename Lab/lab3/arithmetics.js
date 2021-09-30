function add(a, b){
    return a + b
}

sub = (a, b) => {
    return a - b
}

today = new Date()

module.exports.addition = add
module.exports.sub = sub
module.exports.today = today

module.exports.mul = (a, b) => {
    return a * b
}

//Another way to export
//module.exports = { addition : add, sub, today}
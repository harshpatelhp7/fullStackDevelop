console.log("\n\n--------Exercise-1------");
function greeter(myArray, counter){
    const GREET_TEXT = 'Hello';

    for (const i of myArray){
        console.log(`${GREET_TEXT} ${i}`)
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


console.log("\n\n--------Exercise-2------");
function capitalise(string){
let newString ;
let asciiCapitalChar = String.fromCharCode(string.charCodeAt(0) - 32);

    newString = `${asciiCapitalChar}${string.slice(1)}`;
    return newString;
}

console.log(capitalise('fooBar'));
console.log(capitalise('nodeJs'));



console.log("\n\n--------Exercise-3------");
const colors = ['red', 'green', 'blue'];
const capitalizedLetters = colors.map(x => capitalise(x));

console.log(capitalizedLetters);


console.log("\n\n--------Exercise-4------");
var values = [1, 60, 34, 30, 20, 5];
var filterLessThan20 = values.filter(x => x < 20);

console.log(filterLessThan20);


console.log("\n\n--------Exercise-5------");
var array = [1, 2, 3, 4];

var sum = (oldValue, NewValue) => oldValue + NewValue;
var calculateSum = array.reduce(sum);

var product = (oldV, newV) => oldV * newV;
var calculateProduct = array.reduce(product);

console.log('Sum : ' + calculateSum);
console.log('Product : ' + calculateProduct);




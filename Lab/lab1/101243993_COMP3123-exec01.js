//Exercise-1
var string = "the quick brown fox"
var words = string.split(" ")
var newString = []

console.log(`\n\n--------Exercise-1--------`)
console.log(`Original String : ${string}`)

for(let i = 0; i <= words.length - 1; i++){
    newString[i] = String.fromCharCode(words[i][0].charCodeAt(0) - 32) + words[i].substr(1)
}
console.log(`New String: ${newString.join(' ')}\n\n`)



//Exercise-2
console.log(`--------Exercise-2--------`)
function findLargestNum(array = []){
    let largest = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i]
        }
    }
    return largest;
}
console.log(`Group 1: (1, 0, 1)`)
console.log(`Group 2: (0, -10, -20)`)
console.log(`Group 3: (1000, 510, 440)`)

console.log(findLargestNum([1, 0, 1]))
console.log(findLargestNum([0, -10, -20]))
console.log(findLargestNum([1000, 510, 440]) + "\n\n")



//Exercise-3
console.log(`--------Exercise-3--------`)
var str1 = "Python";
var str2 = "JavaScript";
var str3 = "Hi";

function out(string){
    console.log("" + string);
}
console.log("Original Strings: ")
out("1." + str1)
out("2." + str2)
out("3." + str3)

function shiftLast3(string){
    if(string.length >= 3){
        string = string.substr(string.length - 3, string.length - 1) 
        + string.substr(0,string.length - 3)
    }
    console.log("" + string)
}

console.log("\n\nNew Strings: ")
shiftLast3(str1)
shiftLast3(str2)
shiftLast3(str3)



//Exercise-4
console.log(`\n\n--------Exercise-4--------`)
var angle;

function angle_Type(num){
    if(num > 0 && num < 90){
        angle = "Acute angle";
    }
    else if(num == 90){
        angle = "Right Angle";
    }
    else if(num > 90 && num < 180){
        angle = "Obtuse Angle";
    }
    else if(num == 180){
        angle = "Straight Angle";
    }
    else{
        angle = "N/A";
    }
    return angle;
}

  
console.log(angle_Type(45))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))


//Exercise-5
console.log(`\n\n--------Exercise-5--------`)
var maxSum = 0;

function array_max_sum(arr = [], k){
    var sum = 0;
    var collSum = []    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < k; j++){
            sum = sum + arr[j];
        }
        collSum.push(sum);
    }
    
    for(let i = 0; i < collSum.length; i++){
        if(collSum[i] > maxSum){
            maxSum = collSum[i];
        }
}
   return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))

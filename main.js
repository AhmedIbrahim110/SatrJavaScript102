/*const number = Math.abs(-9.12)
console.log(number);

const arr = [1, 4, -3, 9]
const num = Math.min(...arr)
console.log(num);

const str = '1.45'
const floatNumber = parseFloat(str)
console.log(floatNumber + 1);
const intNumber = parseInt(str)
console.log(intNumber + 1);
const isInt = Number.isInteger(str)
console.log(isInt);
*/

/*function square(number){
    if(isNaN(number))
    return 'Invalid input'
    return number * number
}
console.log(square(3));

const randomNumber = Math.random()
console.log(randomNumber);

let int = 12;
console.log(int.toString(2));
*/
//call back:
/*
function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber
}
function sub(firstNumber, secondNumber){
    return firstNumber - secondNumber
}

function mul(firstNumber, secondNumber){
    return firstNumber * secondNumber

}

function operation(firstNumber, secondNumber, opCallback){
    return `[${opCallback(firstNumber, secondNumber)}]`

}
console.log(operation(5,2, sum));
console.log(operation(5,2, sub));
console.log(operation(5,2, mul));
*/
//for each
/*
const primaryC = ['red', 'yellow', 'blue']
const SecondaryC = ['green', 'orange', 'violet']

const colors = primaryC.concat(SecondaryC, 'black', 'white')
console.log(colors);
*/
/*
const numbers = [11, 13, 26, 15, 12]
const el = numbers.find(function(element){
    return element % 3 === 0
})
console.log(el);

const colors = ['black', 'red', 'green', 'blue', 'white']

const rgbColors = colors.slice(1, 4)
console.log(rgbColors);

const numbers = [3, 7, 9]

const squaredNumbers = numbers.map(function(currentValue){
    return currentValue * currentValue
})
console.log(squaredNumbers);

const total = numbers.reduce(function(accumulator, currentValue, index, array){
    //console.log(`index: ${index}`);
    //console.log(`current value: ${currentValue}`);
    //console.log(`accumulator: ${accumulator}`);
    return accumulator + currentValue
})
console.log(total);
*/

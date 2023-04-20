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

function square(number){
    if(isNaN(number))
    return 'Invalid input'
    return number * number
}
console.log(square(3));

const randomNumber = Math.random()
console.log(randomNumber);

let int = 12;
console.log(int.toString(2));
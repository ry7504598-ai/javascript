// const score = 400

// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const balance2 = 100.123456789
// console.log(balance2.toFixed(2))
// console.log(balance2.toPrecision(7))

const hundred = 100
console.log(hundred.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }))

// const num = 45;
// console.log(num)

// const num = 35

// if(num%2==0){
//     console.log("This num is Even Number" , num)
// }else{
//     console.log("This num is Odd Number " ,num)
// }

// const num1 = 90;
// const num2 = 45;

// if(num1>num2){
//     console.log("The first num is large number", num1)
// }else{
//     console.log("The second num is large number", num2)
// }

// function typeofNan(x){
//     if(Number.isNaN(x)){
//         return "Number NaN";
//     }
//     if(isNaN(x)){
//         return "NaN";
//     }
// }

// console.log(typeofNan("100F"))
// console.log(typeofNan(NaN))

// console.log(Number.isNaN(undefined))
// console.log(Number.isNaN({}))

//  function circumference(r){
//     if(Number.isNaN(Number.parseFloat(r))){
//         return 0;
//     }
//     return parseFloat(r)*2.0*Math.PI
//  }
//  console.log(circumference("4.567abcdefgh"));

//  console.log(Number.MAX_VALUE)

 //Maths

//  console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.min(4, 6,7,8))
// console.log(Math.max(4, 6,7,8))

// console.log(Math.random() * 10 + 1);

const min  = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) +min)

//  const myArr = [1, 2, 3, 4, 5];
//  console.log(myArr[3]);

// const myHeros = ["Iron Man", "Spider Man", "Thor", "Hulk", "Black Panther", "Captain America"];
// const myarr = new Array(1,2,3,4,5,6,7,7)
// console.log(myarr[4])

// Array Methods
// myarr.push("Doctor Strange") // add at the end

// // myarr.pop()
// myarr.unshift("Doctor Strange") // add at the beginning
// myarr.shift() // remove from the beginning
// console.log(myarr)

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))

// const newArr = myarr.join(" * ")
// console.log(newArr)
// console.log(myarr)

// console.log("A", myarr)

// const myn1 = myarr.slice(1,3)
// console.log(myn1)

// console.log("B", myn1)

const marvelHeros = ["Iron Man", "Spider Man", "Thor", "Hulk", "Black Panther", "Captain America"];
const dcHeros = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman", "Cyborg"];

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

// const mergeHeros = [...marvelHeros, ...dcHeros]
// console.log(mergeHeros)

// const anotherArr = [1,2,3,[7,4,5],[33,5,1],[1,2,3,[4,5,6]]]
// const flatArr = anotherArr.flat(2)
// console.log(flatArr)/

console.log(Array.isArray("hello"))
console.log(Array.from("Rahul"))
console.log(Array.from({name: "Rahul", age: 23}))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))

// Dates

let myDate = new Date()

// console.log(myDate.getFullYear())
// console.log(myDate.getHours())
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())


// let myCreatedDate = new Date(2023,0 ,23)
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date("2023-01-14")

// console.log(myCreatedDate.toLocaleString())

// let myTimeStam = Date.now()

// console.log(myTimeStam)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

// let newDate  = new Date()
// console.log(newDate)

myDate.toLocaleString('default',{weekday:'long',
    year:'numeric',month:'long',day:'numeric'})
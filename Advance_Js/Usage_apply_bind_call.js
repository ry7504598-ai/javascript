// const obj = {
//     name: "Rahul",
//     age : 23
// }
// function respect(){
//     console.log(this.age)
// }

// respect.call(obj)


const obj = {
    name: "Rahul",
    age : 23
}
function respect(a,b,c){
    console.log(`your age is ${this.age}`,a,b,c)
}

respect.apply(obj ,[2,45,5])
// function abcd(){
//     let a = 13;
//     return function(){
//         console.log(a)
//     }
// }
// abc = abcd()
// abc() 


function countForMe(){
   let c = 0;
    return function(){
      c++;
      console.log(c)
    }
}

let counter = countForMe();
counter()
counter()
counter()
counter()
counter()
counter()



let count2 = countForMe();
count2()
count2()
count2()
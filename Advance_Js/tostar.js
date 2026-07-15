// function createToaster(config){
//     return function(notification){
//         let div =document.createElement("div");
//         div.className = `fixed ${config.theme == "dark"? "bg-gray-800 text-white" : "bg-gray-200 text-white" } rounded text-white px-6 py-3 shadow-lg pointer-events-none transition-opacity ${config.positionX === "right" ? "right-10" : "left-10"}
//         ${config.positionY === "top" ? "top-10" : "bottom-10"}`
//         div.textContent = notification;
//         document.body.appendChild(div)
//          setTimeout(()=>{
//             document.body.remove(div)

//          },config.duration*1000
//         );
//     }
// }


// let toaster = createToaster({
//     positionX: "left",
//     positionY: "top",
//     theme: "dark",
//     duration:3
// });
// toaster("This is a dummy notfication")

function createToaster(config){
    return function(str){
      let div =   document.createElement("div")
      div.textContent = str;
      div.className = `inline-block ${config.theme == "dark"? "bg-gray-800 text-white" : "bg-gray-200 text-white" } rounded text-white px-6 py-3 shadow-lg pointer-events-none transition-opacity ${config.positionX === "right" ? "right-10" : "left-10"}
         ${config.positionY === "top" ? "top-10" : "bottom-10"}`

         document.querySelector(".parent").appendChild(div)
        
        
         setTimeout(() => {
        document.querySelector(".parent").removeChild(div)
    }, config.duration*1000);

    }
   
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,

})

toaster("Download Done")

setTimeout(() => {
   toaster("Rahul accpeted your request") 
}, 3000);
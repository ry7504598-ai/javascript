const items = document.querySelectorAll("li")
const btn  = document.querySelector("button")
function toggleDone(e){
    if(!e.target.className){
        e.target.className = "done"
    }else{
         e.target.className = "";
    }
} 

items.forEach((item)=>{
item.addEventListener("click",toggleDone)


})


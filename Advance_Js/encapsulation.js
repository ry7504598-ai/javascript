function clickLimiter(){
    let click = 0;

    return function(){
        if(click<5){
            click++;
        console.log(`clicked : ${click} times`);   
            
    }
    else{
        console.error("LIMT EXCEEDED, TRY AFTER SOME TIME")
    }
}
}
let fnc = clickLimiter()
fnc()
fnc()
fnc()
fnc()
fnc()
fnc()

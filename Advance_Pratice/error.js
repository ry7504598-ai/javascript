try{
    throw new EvalError("Hello");
} catch(e){
    console.log(e instanceof EvalError)
    console.log(e.message)
}
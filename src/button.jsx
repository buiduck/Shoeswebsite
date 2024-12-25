
function Button(){
    // let count =0;
    // const handleButton = (name)=> {
    //     if(count <3){
    //         count++;
    //         console.log(`${name} you click me ${count} time`)
    //     }else{
    //         console.log(`${name} stop clicking me`)
    //     }
    // }
    const handleButton1 = (e) => e.target.textContent = "Ouch 🍔🍕🍞🧈🥞!";
    return( 
    <button onClick={(e)=>handleButton1(e)}>Click me</button>
);
}
export default Button
import { useState } from "react";
function Mycomponent(){
    const [name , setName] = useState();
    // const updateName = () =>{
    //     setName("Hello duck");
    // }
    const [isEmployed,setIsEmployed] = useState(false);
    const toogleEmployedStatus= () =>{
        setIsEmployed(!isEmployed);
    }
    const [age,setAge] = useState(0);
    const incrementAge = ()=>{
        setAge(age + 1);
    }
    
    return(
       <div>
         <p>Name: {name}</p>
         <button onClick={() => setName("Hello duck")}>Set Name</button>

         <p>Age: {age}</p>
         <button onClick={incrementAge}>Increment Age</button>

         <p>is employed: {isEmployed ? "Yes" : "No"}</p>
         <button onClick={toogleEmployedStatus}>Status employed</button>
       </div>
    );
}
export default Mycomponent;
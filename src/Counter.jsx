import { useState } from "react";
function Counter(){
    const [count , setCount] = useState(0);
    const [car, setCar] = useState({year: 2024,
                                     make: "Ford", model:"Mustang"})
    const [foods,setFoods] = useState(["Apppe","Orange","Banana"]);
    const increment = () =>{
        setCount(count+1);
        //setCount(count => count+1); Nen dung moi su dung nhieu cap nhat state
    }
    const decrement = () =>{
        setCount(count-1);
    }
    const reset = ()=>{
        setCount(0);
    }
    const HandlechangeYear=(event) =>{
        setCar(c => ({...c, year: event.target.value}));
    };
    const HandlechangeMake=(event) =>{
        setCar(c =>({...c, make : event.target.value}))
    };
    const HandlechangModel=(event) =>{
        setCar(c =>({...c, model : event.target.value}))
    };

    const HandleAddFood = () =>{
        const newfood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value ="";
        setFoods(f =>[...f,newfood]);
    };
    const HandleRemoveFoord = (index) =>{
        setFoods(foods.filter( (_,i) => i!== index ))
    };
    return(
        <>
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>increment</button>
        </div>

        <div>
            <h2>UPDATE OBJECT IN STATE: </h2>
            <p>Your favorite Car: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={HandlechangeYear}></input><br/>
            <input type="text" value={car.make}onChange={HandlechangeMake}></input><br/>
            <input type="text" value={car.model} onChange={HandlechangModel}></input><br/>
        </div>

        <div>
        <h1>UPDATE ARRAY IN STATE: </h1>
            <h2>LIST OF FOOD</h2>
            <ul>
                {foods.map((food,index) => <li key={index}
                 onClick={() => HandleRemoveFoord(index)}>
                    {food}
                    </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter"></input>
            <button onClick={HandleAddFood}> ADD FOOD</button>
        </div>
        </>
    );
}
export default Counter;
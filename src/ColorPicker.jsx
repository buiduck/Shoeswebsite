import { useState } from "react";
function ColorPicker(){

    const [color,setColor]=useState("#");
    const HandleColorChange =(event)=>{
        setColor(event.target.value)
    }

    return(<div className="color-picker-container">
        <h1 className="h1-color">Color picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
        <p>Select Color : {color}</p>
        </div>
        
        <label>Select a Color </label>
        <input type="color" value={color} onChange={HandleColorChange}></input>

    </div>)
}
export default ColorPicker;
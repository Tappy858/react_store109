import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(){

    function decrease(){
        console.log("Decreasing");
    }
    function increase(){
        console.log("Increasing");
    }
    
    return(
        <div className="quantityPicker">
            <button onClick={decrease}>-</button>
            <label htmlFor="">404</label>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
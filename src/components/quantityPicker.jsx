import "./quantityPicker.css";
import { useState } from "react";


function QuantityPicker()
{

    const[quantity,setQuantity] = useState (1);
   // quantity = 10; this is what we dont want to do


    function decrease(){
        if(quantity===1) return;       
        let value = quantity - 1;
        setQuantity(value)
        console.log("Decreasing");
    }
    //create the increase function

    //please use the same logic but for the increasing.
    function increase(){
        let value = quantity + 1;
        setQuantity(value);
        console.log("Increasing");
        //small change`
    }


    return (
        <div className="quantityPicker">
        <button class="btn btn-small btn-primary" disabled = {quantity===1}  onClick={decrease} >-</button>
        <label>{quantity}</label>
            <button class="btn btn-small btn-primary" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
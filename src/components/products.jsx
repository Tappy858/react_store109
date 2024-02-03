import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Product(props){

    useEffect(function()
    {

    },[]);

    return(
        <div className="product">
            <img src={"./images/" + props.data.image} alt=""></img>
            <h5>{props.data.title}</h5>
            <QuantityPicker></QuantityPicker>                       
        </div>
        
    );
}

export default Product;
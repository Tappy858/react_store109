import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Product(props) {
    useEffect(function () {
        // Add any side-effects or additional logic here
    }, []);

    return (
        <div className="product">
            <img src={"./images/" + props.data.image} alt={props.data.title}></img>
            <h5>{props.data.title}</h5>

            <div className="prices">
                <label className="total">${props.data.price.toFixed(2)}</label>
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>

            <div className="controls">
                <QuantityPicker/>
                <button type="button" class="btn btn-secondary">Add</button>
            </div>
        </div>
    );
}

export default Product;

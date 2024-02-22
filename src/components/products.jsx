import DataService from "../services/dataService";
import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    useEffect(function () {
        // Add any side-effects or additional logic here
    }, []);

    function onQuantityChange(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        const total = (props.data.price * quantity).toFixed(2);
        return total;
    }

    function add() {
        const prod4cart = {
            ...props.data,
            quantity: quantity
        };
        
        let service = new DataService();
        service.addToCart(prod4cart);
    }

    return (
        <div className={`product`}>
            <img
                src={"./images/" + props.data.image}
                alt={props.data.title}
                key={props.data.image} />
            <h5>{props.data.title}</h5>

            <div className="prices">
                <label className="total">
                    ${getTotal()}
                </label>
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>

            <div className="controls">
                <QuantityPicker
                    onQuantityChange={onQuantityChange} key={props.data.id} />
                <button type="button" className="btn btn-secondary" onClick={add}>Add</button>
            </div>
        </div>
    );
}

export default Product;

import "./products.css";
import QuantityPicker from "./quantityPicker";

function Product(){

    return(
        <div className="product">
            <img src="https://picsum.photos/160/220" alt=""></img>
            <h5>Hello im a product</h5>
            <QuantityPicker></QuantityPicker>                       
        </div>
        
    );
}

export default Product;
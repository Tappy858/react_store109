import Product from "../components/products";
import "./catalog.css"

function Catalog(){
    return (
        <div>
            <h1>Here look my awesome products</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;
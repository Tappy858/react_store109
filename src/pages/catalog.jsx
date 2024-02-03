import Product from "../components/products";
import "./catalog.css"
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

function Catalog() {
    
    const [productState, setProducts] = useState([]);

    useEffect(function(){
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let products = service.getProducts();
        setProducts(products);
    }
    return (
        <div>
            <h1>Here look at my {productState.length} awesome new products</h1>
            {productState.map(productArrow => <Product data={productArrow}></Product>)}

        </div>
    );
}

export default Catalog;
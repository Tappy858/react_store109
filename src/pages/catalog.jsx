import Product from "../components/products";
import "./catalog.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

function Catalog() {
    const [productState, setProducts] = useState([]);
    const [status, setStatus] = useState("blank"); // Add status state

    useEffect(function () {
        loadCatalog();
        setStatus("Loading...");
    }, []);

    function loadCatalog() {
        let service = new DataService();
        let products = service.getProducts();
        setProducts(products);

        setTimeout(() => {
            setStatus("Ready");
        }, 3000); // Adjust the delay as needed (in milliseconds)
    }

    return (
        <><h1>Look at my {productState.length} new awesome products!</h1>
        <p>Status: {status}</p>
        <div className="product-container">
            {productState.map((productArrow) => (
                <Product key={productArrow.id} data={productArrow}></Product>
            ))}
        </div></>
    );
}

export default Catalog;

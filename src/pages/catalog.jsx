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

    async function loadCatalog() {
        let service = new DataService();
        let products = await service.getProducts();
        setProducts(products);

        setTimeout(() => {
            setStatus("Ready");
        }, 3000); // Adjust the delay as needed (in milliseconds)
    }

    return (
        <>
            <h1>
                Discover Our Collection of {productState.length} Exceptional Products!
            </h1>
            <p>Status: <span style={{ color: status === 'Loading...' ? 'red' : 'green' }}>{status}</span></p>
            <div className="product-container">
                {productState.map((product) => (
                    <Product key={product.id} data={product} loading={status === 'Loading...'} />
                ))}
            </div>
        </>
    );
}

export default Catalog;

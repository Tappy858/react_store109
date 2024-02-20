import "./admin.css";
import { useState } from "react";

//create the component
function Admin() {
    const [product, setProduct] = useState({
        title: "",
        category: "",
        price: "",
        image: "",
    });

    function handleInputChange(e) {
        const val = e.target.value;
        const name = e.target.name;

        // create the copy, modify it and send it back
        let copy = { ...product };
        copy[name] = val;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        // save to server
        clearForm();
    }
    function clearForm() {
        setProduct({
            title: "",
            category: "",
            price: "",
            image: "",
        });
    }

    return (
        <div className="admin page">
            <h1>Store Management</h1>

            <div className="parent-container">
                <h3>Register Products</h3>
            </div>

            <div>
                <label>Title</label>
                <input
                    value={product.title}
                    name="title"
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Category</label>
                <input
                    value={product.category}
                    name="category"
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    value={product.price}
                    name="price"
                    type="number"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Image</label>
                <input
                    value={product.image}
                    name="image"
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button onClick={saveProduct}>Save Product</button>
            </div>

        </div>
    );
}

export default Admin;

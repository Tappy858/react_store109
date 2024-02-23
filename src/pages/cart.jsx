import DataService from "../services/dataService";
import "./cart.css";
import React, { useEffect, useState } from 'react';



function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        loadCart();
    }, [setCart]);



    function loadCart() {
        try {
            let service = new DataService();
            let cartData = service.readCart();
            setCart(cartData);
        } catch (error) {
            console.error("Error loading cart:", error);
        }
    }

    function calculateItemTotal(item) {
        return (item.price * item.quantity).toFixed(2);
    }

    function calculateTotalPrice() {
        return cart.reduce((total, prod) => total + prod.price * prod.quantity, 0).toFixed(2);
    }

    function updateCart(newCart) {
    try {
        let service = new DataService();
        // First, update React state
        setCart(newCart);
        // Then, save to local storage
        service.saveCart(newCart);
    } catch (error) {
        console.error("Error updating cart:", error);
    }
}


    function removeFromCart(productId) {
        const updatedCart = cart.filter(item => item.id !== productId);
        updateCart(updatedCart);
    }

    function incrementQuantity(productId) {
        const updatedCart = cart.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    }

    function decrementQuantity(productId) {
        const updatedCart = cart.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        );
        updateCart(updatedCart);
    }

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="list">
                {cart.map((prod) => (
                    <div key={prod.id} className="cart-item">
                        <img src={'./images/' + prod.image} className="cart-item-image" alt={prod.title} />
                        <div className="cart-item-info">
                            <div>{prod.title}</div>
                            <div>Quantity: {prod.quantity}</div>
                            <div>Price: ${prod.price.toFixed(2)}</div>
                            <div>Total: ${calculateItemTotal(prod)}</div>
                            <button onClick={() => removeFromCart(prod.id)}>Remove</button>
                            <button onClick={() => incrementQuantity(prod.id)}>+</button>
                            <button onClick={() => decrementQuantity(prod.id)} disabled={prod.quantity === 1}>-</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="total">
                <strong>Total Price: ${calculateTotalPrice()}</strong>
            </div>
        </div>
    );
}

export default Cart;

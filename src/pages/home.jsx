// Assuming you have a routing setup using react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="home page">
            <h3>Welcome to Jolly's Organic Market</h3>
            <h1>
                Experience Freshness Delivered to Your Doorstep with{' '}
                <Link to="/catalog" className="link-text">
                    'Just One Click!'
                </Link>
            </h1>

            <div>
                <img className="main-img" src="./images/home1.jpg" alt="Organic food store" />
            </div>
        </div>
    );
}

export default Home;

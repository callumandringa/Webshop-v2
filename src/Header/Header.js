'use client';

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [cartCount, setCartCount] = useState(3);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="header">
          
            {/* Main Header */}
            <div className="header-main">
                <div className="header-container">
                    {/* Logo */}
                    <div className="logo">
                        <h1>funpops v2</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button className="search-btn">🔍</button>
                    </div>

                    {/* Right Section */}
                    <div className="header-right">
                        <button className="wishlist-btn">
                            <span className="icon">❤️</span>
                            Wishlist
                        </button>
                        <button className="cart-btn">
                            <span className="icon">🛒</span>
                            Cart
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="navbar">
                <ul className="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop All</a></li>
                  
                    <li><a href="/deals">Deals</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
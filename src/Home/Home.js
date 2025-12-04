import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <main className="home">
           
            <section className='specials'>
                 <div className="home-banner">
                <h1>Welcome to Funpops v2!</h1>
            
            </div>
                <div className='specials-content'>
                    <h2>Special Offers</h2>
                    <p>Check out our latest special offers and discounts!</p>
                </div>
                <article className="specials-articles">
                    <div className="special-item">
                        <h3>Buy One Get One Free</h3>
                        <p>On select items, buy one and get another one for free!</p>
                    </div>
                    <div className="special-item">
                        <h3>20% Off Orders Over $100</h3>
                        <p>Use code SAVE20 at checkout to get 20% off your order over $100.</p>
                    </div>
                    <div className="special-item">
                        <h3>Free Gift with Purchase</h3>
                        <p>Receive a free gift with any purchase over $75.</p>
                    </div>
                </article>
            </section>

            <section className="hero-section">
                <div className="hero-content">
                   <div className='products'></div>
            
                </div>
            </section>
        </main>
    );
};

export default Home;
// Import necessary libraries and components
import React from 'react';
import '../input.css';


// Create the LandingPage component
const LandingPage = () => {
  return (
    <div className="landing-page w-full min-h-screen max-h-screen overflow-hidden coral-candy">
      <div className="landing-image">
        <img src="/imgs/promoimage3.png" alt=""/>
      </div>
      <div className="hero-section py-16 landing-content">
          <div className="container mx-auto px-4 py-32 text-center">
              <h1 className="text-4xl font-bold mb-4 text-white">Novel-tea and Scones</h1>
              <p className="text-xl mb-8 text-white">A little <br></br> <span className="whimsy">Whimsy</span><br></br> in every bite</p>
              <div className="space-x-4">
              <button className="landing-button shop-button">Bake Shop</button>
              <button className="landing-button pickup-button">Order for Pickup</button>
          </div>
      </div>
      </div>
      <div className="bottom-gradient"></div>
      <div className="right-gradient"></div>
    </div>
  );
};

export default LandingPage;
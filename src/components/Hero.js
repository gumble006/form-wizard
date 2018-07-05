import React from 'react';
import './Hero.css';

const Hero = ({showModal}) => (
  <div>
    <div className="bg">
      <img src="../hero_lg_3.jpg" alt="background" className="img-responsive bg-image" />
    </div>
  <div className="cta-wrapper text-white">
    <div>
      <h1>Greater velocity for customers.</h1>
      <p>BUILD FAST. GET RESULTS.</p>
    </div>
    <button className="btn hero-cta-btn btn-lg btn-danger" tabIndex="0" onClick={showModal}>SIGN UP</button>
  </div>

</div>
);

export default Hero;

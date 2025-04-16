import React from 'react';
import HeroImage from '../../assets/images/jumbotron.png';
function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold animate-pulse">
              PT ANEKA KOMKAR UTAMA
            </h1>
            <p className="mb-5">Innovative Rubber Component Solutions Since 1988</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

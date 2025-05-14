import React from "react";
import "./BITCollege.css";

const BITCollege = () => {
  return (
    <div className="bit-container">
      <header className="bit-header">
        <h1>Bangalore Institute of Technology</h1>
        <p className="tagline">Empowering Minds, Shaping Futures</p>
      </header>

      <section className="bit-hero">
        <div className="overlay">
          <h2>Welcome to BIT</h2>
          <p>
            Explore academic excellence, innovation, and a vibrant campus life.
          </p>
          <button className="btn-explore">Explore More</button>
        </div>
      </section>
    </div>
  );
};

export default BITCollege;

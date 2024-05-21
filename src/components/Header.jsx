import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="App">
      <header>
        <img src="./images/Logo.png" alt="" />
        <nav>
          <ul>
            <li><a href="#Features">Features</a></li>
            <li><a href="#home">About</a></li>
            <li><a href="#about">Pricing</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

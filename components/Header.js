import React from 'react';

function Header() {
  return (
    <header>
      <nav id="nav34" className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div id="welcomeMessage" style={{ display: 'none' }}></div>
            <h1 id="logoo">Vestiré</h1>
          </div>
          <div className="secondary-full">
            <a id="sua" href="#Notro">About us</a>
            <a href="#ubi">Location</a>
            <a href="#carro">Shop</a>
          </div>
        </div>
      </nav>
    </header>
  );
  
}

export default Header;
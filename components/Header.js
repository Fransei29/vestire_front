import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header>
        <nav id="nav34">
            <div className="desktop fr">
                <div className="logo">
                <div id="welcomeMessage" style={{ display: 'none' }}></div>
                <h1 id="logoo">Vestiré</h1>
                </div>
                <div className="secondary-full">
                <a id="sua" href="#Notro">
                    Acerca de nosotros
                </a>
                <a href="#ubi">Ubicacion</a>
                <Link href="/products">
                    <>Tienda</>
                </Link>
                </div>
            </div>
       </nav>
   </header>
  );
}

export default Header;
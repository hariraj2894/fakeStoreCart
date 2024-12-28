import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Fake Store</div>
      <button onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;

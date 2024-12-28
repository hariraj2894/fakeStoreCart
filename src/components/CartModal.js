import React from 'react';

const CartModal = ({ cartItems, onClose, onRemoveFromCart }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} width="50" />
                <p>{item.title}</p>
                <p>₹{item.price}</p>
                <button onClick={() => onRemoveFromCart(item.id)}>Remove from Cart</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;

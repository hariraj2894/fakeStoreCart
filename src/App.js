import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartModalOpen(true)} />
      <ProductList products={products} onAddToCart={addToCart} />
      {isCartModalOpen && (
        <CartModal 
          cartItems={cart} 
          onClose={() => setIsCartModalOpen(false)} 
          onRemoveFromCart={removeFromCart} 
        />
      )}
    </div>
  );
}

export default App;

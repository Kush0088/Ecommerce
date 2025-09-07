import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import ImageSlider from './components/ImageSlider';
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  // 🔼 Cart state lifted here
  const [cart, setCart] = useState({});

  // 🔢 Total items in cart
  const getTotalCartItems = () => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };

 return (
  <div style={{ backgroundColor: '#221f1fff', color: '#ffffff', minHeight: '100vh' }}>
    <Navbar
      onLoginClick={() => setLoginOpen(true)}
      isLoggedIn={isLoggedIn}
      cartCount={getTotalCartItems()}
    />

    <LoginModal
      open={isLoginOpen}
      onClose={() => setLoginOpen(false)}
      onLoginSuccess={() => {
        setLoggedIn(true);
        setLoginOpen(false);
      }}
    />

    <ImageSlider />
    <ProductList isLoggedIn={isLoggedIn} cart={cart} setCart={setCart} />

    <Footer />
  </div>
);
}

export default App;

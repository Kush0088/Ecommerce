import React from 'react';

const Navbar = ({ onLoginClick, isLoggedIn, cartCount }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>Home</div>

      <div style={styles.right}>
        {!isLoggedIn && (
          <button onClick={onLoginClick} style={{ ...styles.btn, marginRight: '10px' }}>
            Login
          </button>
        )}

        <div style={styles.cartContainer}>
          <button style={styles.btn}>Cart</button>
          {cartCount > 0 && (
            <span style={styles.cartBadge}>{cartCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#736969ff', // ✅ Changed to gray for dark theme
    padding: '10px 20px',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  right: {
    display: 'flex',
    alignItems: 'center', // ✅ Ensures vertical alignment
    position: 'relative',
  },
  btn: {
    backgroundColor: '#a9a5a5ff',
    color: '#454040ff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  cartContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '3px 7px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
};

export default Navbar;

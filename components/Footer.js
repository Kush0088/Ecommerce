import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Terms & Conditions | Privacy Policy</p>
      <p>© 2025 E-Commerce Pvt. Ltd. All rights reserved.</p>
       <p>Made by AGHERA KUSH.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2a2a2a',
    color: '#cccccc',
    textAlign: 'center',
    padding: '20px 10px',
    marginTop: '40px',
    fontSize: '14px',
  },
};

export default Footer;

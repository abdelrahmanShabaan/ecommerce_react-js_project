// BottomComponent.js
import React from 'react';
import { FaHome, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './BottomComponentStyle.css';

const BottomComponent = () => {
  return (
    <footer className="footer">
      <div className="section">
        <h3 className="sectionTitle">Get to Know Us</h3>
        <ul className="list">
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="sectionTitle">Your Cart and Favorite Product</h3>
        <ul className="list">
          <li>Products Cart</li>
          <li>Favorite Products</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="sectionTitle">Payment Methods</h3>
        <ul className="list">
          <li><img style={{ width: '15rem' }} src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/43279012100/original/NQaEc3sL6Gso96fAdUWRiHZ5G9UUaHgUog.png?1639064459" alt="Visa" /></li>
        </ul>
      </div>
    </footer>
  );
};

export default BottomComponent;

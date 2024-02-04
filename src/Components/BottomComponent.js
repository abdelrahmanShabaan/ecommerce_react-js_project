import React from 'react';
import { FaHome, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'; // You may need to install this package

const BottomComponent = () => {
    return (
        <footer style={styles.footer}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Get to Know Us</h3>
            <ul style={styles.list}>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              {/* Add more links as needed */}
            </ul>
          </div>
    
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Make Money with Us</h3>
            <ul style={styles.list}>
              <li>Sell on Amazon</li>
              <li>Sell Your Services on Amazon</li>
              <li>Sell on Amazon Business</li>
              {/* Add more links as needed */}
            </ul>
          </div>
    
          {/* Add more sections as needed */}
    
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Amazon Payment Products</h3>
            <ul style={styles.list}>
              <li>Amazon Rewards Visa Signature Cards</li>
              <li>Amazon.com Store Card</li>
              <li>Amazon Business Card</li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </footer>
      );
    };
    
    const styles = {
      footer: {
        width: '100%', // Set width to 100%
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-around',
        bottom: 0, // Set bottom to 0

      },
      section: {
        flex: 1,
        margin: '0 20px',
      },
      sectionTitle: {
        fontSize: '18px',
        marginBottom: '10px',
      },
      list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontSize: '14px',
      },
    };
    

export default BottomComponent;

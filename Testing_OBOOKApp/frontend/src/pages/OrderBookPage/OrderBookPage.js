import React from 'react';
import './OrderBookPage.css';

function OrderBookPage() {
  return (
    <div className="order-book-page">
      <header className="header">
        <img src="provided-logo-url" alt="Platform Logo" className="logo" />
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Order Book</li>
            <li className="nav-item">Reports</li>
            <li className="nav-item">Settings</li>
          </ul>
        </nav>
      </header>
      <main className="main-body">
        <form className="order-form">
          <div className="form-group">
            <label htmlFor="instrument">Instrument</label>
            <input type="text" id="instrument" name="instrument" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="orderType">Order Type</label>
            <select id="orderType" name="orderType" className="form-input">
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <a href="#" className="additional-link">View Harmonized Format Guide</a>
        </form>
      </main>
      <footer className="footer">
        <a href="#" className="footer-link">Terms of Service</a>
        <a href="#" className="footer-link">Privacy Policy</a>
        <button className="action-button">Submit Order</button>
      </footer>
    </div>
  );
}

export default OrderBookPage;

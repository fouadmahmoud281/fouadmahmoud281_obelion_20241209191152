import React from 'react';
import './NCAOrderBook.css';

function NCAOrderBook() {
  return (
    <div className="nca-order-book">
      <header className="nca-header">
        <img src="logo-url.png" alt="Platform Logo" className="nca-logo" />
        <nav className="nca-nav">
          <ul>
            <li className="nca-nav-item">Home</li>
            <li className="nca-nav-item">Orders</li>
            <li className="nca-nav-item">Reports</li>
          </ul>
        </nav>
      </header>
      <main className="nca-main">
        <form className="nca-form">
          <div className="form-field">
            <label>Order ID</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-field">
            <label>Instrument</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-field">
            <label>Price</label>
            <input type="number" className="form-input" />
          </div>
          <div className="form-field">
            <label>Quantity</label>
            <input type="number" className="form-input" />
          </div>
          <a href="#" className="nca-link">Additional Options</a>
          <button type="submit" className="nca-primary-button">Exchange Data</button>
        </form>
      </main>
      <footer className="nca-footer">
        <a href="#" className="nca-footer-link">Privacy Policy</a>
        <a href="#" className="nca-footer-link">Terms of Service</a>
      </footer>
    </div>
  );
}

export default NCAOrderBook;

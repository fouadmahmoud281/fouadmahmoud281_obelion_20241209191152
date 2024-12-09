import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './FileTransferPage.css';

function FileTransferPage() {
  return (
    <div className="file-transfer-page">
      <header className="header">
        <img src="logo-url" alt="Company Logo" className="logo" />
        <nav className="navigation">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/transfer" className="nav-link">Transfer Files</NavLink>
          <NavLink to="/help" className="nav-link">Help</NavLink>
        </nav>
      </header>
      <main className="main-content">
        <form className="file-transfer-form">
          <div className="form-group">
            <label htmlFor="fileInput" className="form-label">Select Files:</label>
            <input type="file" id="fileInput" className="file-input" multiple />
          </div>
          <button type="submit" className="primary-button">Transfer Files</button>
        </form>
      </main>
      <footer className="footer">
        <p className="footer-text">For more information, visit our <a href="/info" className="footer-link">Info Page</a>.</p>
      </footer>
    </div>
  );
}

export default FileTransferPage;

import React from 'react';
import './NCAFileTransfer.css';

function NCAFileTransfer() {
  return (
    <div className="nca-file-transfer">
      <header className="header">
        <img src="YOUR_LOGO_URL_HERE" alt="Company Logo" className="logo" />
      </header>
      <nav className="navigation-tabs">
        <ul>
          <li>Home</li>
          <li>Transfer Files</li>
          <li>History</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="main-content">
        <h1>Transfer Files using ESMA's EAMFT System</h1>
        <form className="file-transfer-form">
          <label htmlFor="fileInput">Choose files to transfer:</label>
          <input type="file" id="fileInput" multiple />
          <button type="submit" className="primary-action-button">Transfer Files</button>
        </form>
        <div className="additional-links">
          <a href="#moreInfo">More Information</a>
          <a href="#relatedTasks">Related Tasks</a>
        </div>
      </main>
      <footer className="footer">
        <p>Additional information and links</p>
      </footer>
    </div>
  );
}

export default NCAFileTransfer;

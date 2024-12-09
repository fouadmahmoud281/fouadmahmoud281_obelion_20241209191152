import React, { useState } from 'react';
import './ESMAFileValidation.css';

function ESMAFileValidation() {
  const [senderCode, setSenderCode] = useState('');
  const [file, setFile] = useState(null);
  const [validationMessage, setValidationMessage] = useState('');

  const validateFile = () => {
    const fileNamePattern = /^[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/;
    const maxFileSize = 1048576; // 1MB

    if (senderCode !== 'ExpectedSenderCode') {
      setValidationMessage('Criteria 1: Sender code does not match.');
      return;
    }

    if (!file) {
      setValidationMessage('Criteria 2: File is empty.');
      return;
    }

    if (!fileNamePattern.test(file.name)) {
      setValidationMessage('Criteria 3: File naming convention is not respected.');
      return;
    }

    if (file.size > maxFileSize) {
      setValidationMessage('Criteria 4: File size exceeds the disk quota limit.');
      return;
    }

    setValidationMessage('File validation successful.');
  };

  return (
    <div className="esma-file-validation">
      <header className="header">
        <img src="company-logo-url" alt="Company Logo" className="logo" />
        <nav className="nav-tabs">
          <span className="tab">Home</span>
          <span className="tab">About</span>
          <span className="tab">Contact</span>
        </nav>
      </header>
      <main className="main-content">
        <div className="form">
          <label className="label" htmlFor="senderCode">Sender Code</label>
          <input
            type="text"
            id="senderCode"
            className="input sender-code"
            value={senderCode}
            onChange={(e) => setSenderCode(e.target.value)}
          />
          <label className="label" htmlFor="fileUpload">Upload File</label>
          <input
            type="file"
            id="fileUpload"
            className="input file-upload"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="validate-button" onClick={validateFile}>Validate</button>
        </div>
        <p className="validation-message">{validationMessage}</p>
        <a href="#support" className="support-link">Need Help?</a>
      </main>
      <footer className="footer">
        <span className="footer-link">Privacy Policy</span>
        <span className="footer-link">Terms of Service</span>
        <span className="footer-link">Contact Us</span>
      </footer>
    </div>
  );
}

export default ESMAFileValidation;

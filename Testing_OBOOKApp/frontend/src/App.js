import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NCAOrderBook from './components/NCAOrderBook/NCAOrderBook.js';
import ESMAFileValidation from './components/ESMAFileValidation/ESMAFileValidation.js';
import NCAFileTransfer from './components/NCAFileTransfer/NCAFileTransfer.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">NCA Order Book</Link></li>
            <li><Link to="/esma-file-validation">ESMA File Validation</Link></li>
            <li><Link to="/nca-file-transfer">NCA File Transfer</Link></li>
          </ul>
        </nav>
        
        <main>
          <Routes>
            <Route path="/" element={<NCAOrderBook />} />
            <Route path="/esma-file-validation" element={<ESMAFileValidation />} />
            <Route path="/nca-file-transfer" element={<NCAFileTransfer />} />
          </Routes>
        </main>

        <footer>
          &copy; 2024 Testing_OBOOK App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;

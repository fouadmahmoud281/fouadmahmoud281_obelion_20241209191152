const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const NCAOrderBookRoutes = require('./routes/NCAOrderBookRoutes');
const ESMAFileValidationRoutes = require('./routes/ESMAFileValidationRoutes');
const NCAFileTransferRoutes = require('./routes/NCAFileTransferRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'db',
    user: 'agent',
    password: 'agentpass',
    database: 'Obelien AI'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Routes
app.use('/api', NCAOrderBookRoutes);
app.use('/api', ESMAFileValidationRoutes);
app.use('/api', NCAFileTransferRoutes);

// Start server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

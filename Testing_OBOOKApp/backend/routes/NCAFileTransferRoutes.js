const express = require('express');
const router = express.Router();
const { transferFiles, getTransferHistory, deleteTransfer } = require('../controllers/NCAFileTransferController');

router.post('/transfer', transferFiles);
router.get('/history', getTransferHistory);
router.delete('/transfer/:id', deleteTransfer);

module.exports = router;

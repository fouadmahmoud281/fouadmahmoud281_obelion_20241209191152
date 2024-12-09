const express = require('express');
const router = express.Router();

const {
  validateESMAFile,
  getAllValidatedFiles,
  getValidatedFileById,
  deleteValidatedFile
} = require('../controllers/ESMAFileValidationController');

router.post('/validate', validateESMAFile);
router.get('/validated-files', getAllValidatedFiles);
router.get('/validated-files/:id', getValidatedFileById);
router.delete('/validated-files/:id', deleteValidatedFile);

module.exports = router;

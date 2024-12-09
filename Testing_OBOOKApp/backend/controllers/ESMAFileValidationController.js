const { Op } = require('sequelize');
const ESMAFileValidation = require('../models/ESMAFileValidationModel');

// Function to validate file data
async function validateESMAFile(req, res) {
  const { senderCode, fileName, fileSize } = req.body;
  
  try {
    // Validate sender code
    if (senderCode !== 'ExpectedSenderCode') {
      return res.status(400).json({ message: 'Criteria 1: Sender code does not match.' });
    }

    // Validate file name pattern
    const fileNamePattern = /^[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/;
    if (!fileNamePattern.test(fileName)) {
      return res.status(400).json({ message: 'Criteria 3: File naming convention is not respected.' });
    }

    // Validate file size
    if (fileSize > 1048576) {
      return res.status(400).json({ message: 'Criteria 4: File size exceeds the disk quota limit.' });
    }

    // If all validations pass, save the file validation record
    const newFileValidation = await ESMAFileValidation.create({
      senderCode,
      fileName,
      fileSize
    });

    return res.status(201).json({ message: 'File validation successful.', data: newFileValidation });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred during file validation.', error: error.message });
  }
}

// Function to get all validated files
async function getAllValidatedFiles(req, res) {
  try {
    const validatedFiles = await ESMAFileValidation.findAll();
    return res.status(200).json(validatedFiles);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while fetching validated files.', error: error.message });
  }
}

// Function to get a validated file by ID
async function getValidatedFileById(req, res) {
  const { id } = req.params;
  
  try {
    const validatedFile = await ESMAFileValidation.findOne({ where: { id } });
    
    if (!validatedFile) {
      return res.status(404).json({ message: 'File not found.' });
    }

    return res.status(200).json(validatedFile);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while fetching the file.', error: error.message });
  }
}

// Function to delete a validated file by ID
async function deleteValidatedFile(req, res) {
  const { id } = req.params;
  
  try {
    const deletedFile = await ESMAFileValidation.destroy({ where: { id } });
    
    if (!deletedFile) {
      return res.status(404).json({ message: 'File not found.' });
    }

    return res.status(200).json({ message: 'File successfully deleted.' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while deleting the file.', error: error.message });
  }
}

module.exports = {
  validateESMAFile,
  getAllValidatedFiles,
  getValidatedFileById,
  deleteValidatedFile
};

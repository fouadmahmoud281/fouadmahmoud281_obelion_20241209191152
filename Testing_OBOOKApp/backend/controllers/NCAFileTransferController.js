const NCAFileTransfer = require('../models/NCAFileTransferModel');

// Function to handle file transfers
exports.transferFiles = async (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const fileTransfers = await Promise.all(
      files.map(async (file) => {
        const { originalname: fileName, size: fileSize, mimetype: fileType, path: filePath } = file;
        const userId = req.user.id; // Assume user ID is available in the request

        const fileTransfer = await NCAFileTransfer.create({
          fileName,
          fileSize,
          fileType,
          filePath,
          userId,
        });

        return fileTransfer;
      })
    );

    res.status(201).json(fileTransfers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to transfer files' });
  }
};

// Function to get transfer history
exports.getTransferHistory = async (req, res) => {
  try {
    const userId = req.user.id; // Assume user ID is available in the request
    const history = await NCAFileTransfer.findAll({
      where: { userId },
    });

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve transfer history' });
  }
};

// Function to delete a file transfer record
exports.deleteTransfer = async (req, res) => {
  try {
    const { id } = req.params;

    const fileTransfer = await NCAFileTransfer.findByPk(id);

    if (!fileTransfer) {
      return res.status(404).json({ error: 'File transfer not found' });
    }

    await fileTransfer.destroy();

    res.status(200).json({ message: 'File transfer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete file transfer' });
  }
};

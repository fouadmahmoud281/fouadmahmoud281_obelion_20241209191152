module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('ESMAFileValidations', [
    {
      senderCode: 'SenderCode1',
      fileName: 'file1.txt',
      fileSize: 1024
    },
    {
      senderCode: 'SenderCode2',
      fileName: 'file2.txt',
      fileSize: 2048
    }
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('ESMAFileValidations', null, {})
};

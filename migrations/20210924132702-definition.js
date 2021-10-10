module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
          'files',
          'definition',
          {
            type: Sequelize.TEXT,
          },
      ),
      queryInterface.addColumn(
          'files',
          'fnv32Rev',
          {
            type: Sequelize.STRING,
          },
      ),
      queryInterface.addColumn(
          'files',
          'fnv64Rev',
          {
            type: Sequelize.STRING,
          },
      ),
      queryInterface.addColumn(
          'files',
          'crc32Rev',
          {
            type: Sequelize.STRING,
          },
      ),
      queryInterface.addColumn(
          'files',
          'fileObject',
          {
            type: Sequelize.JSON,
          },
      ),
      queryInterface.addColumn(
          'files',
          'otherProperties',
          {
            type: Sequelize.JSON,
          },
      ),
    ]);
  },
}
'use strict';
const {
    Model, DATE
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class File extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    }
    File.init({
        crc32: DataTypes.STRING,
        fnv32: DataTypes.STRING,
        fnv64: DataTypes.STRING,
        path: DataTypes.STRING,
        project: {
            type: DataTypes.STRING,
            defaultValue: "wd1Retail"
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        definition: DataTypes.TEXT,
        fnv32Rev: DataTypes.STRING,
        fnv64Rev: DataTypes.STRING,
        crc32Rev: DataTypes.STRING,
        fileObject: DataTypes.JSON,
        otherProperties: DataTypes.JSON
    }, {
        sequelize,
        modelName: 'File',
    });

    return File;
};
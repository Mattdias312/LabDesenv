/* eslint-disable prettier/prettier */
'use strict';

const { DataType } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('product', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataType.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataType.STRING(100),
      },
      value: {
        allowNull: false,
        type: DataType.FLOAT(14, 2),
      },
      brandId: {
        type: DataType.INTEGER,
        allowNull: false,
        references: {
          model: 'brand',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      weight: {
        allowNull: false,
        type: DataType.NUMBER(),
      },
    });
  },

  async down(queryInterface) {},
};


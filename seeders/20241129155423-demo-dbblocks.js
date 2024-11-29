'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Blocks",
      [
        {
          titulo: "Hola a todos",
          contenido: "Un saludo para los que vean esta explicacion",
          autor: "alejito perez",
          fecha: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Blocks", null, {});
  }
};

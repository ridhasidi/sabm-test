"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vacancy.hasMany(models.Applicant, { foreignKey: "vacancyId" });
    }
  }
  Vacancy.init(
    {
      photoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Photo is required",
          },
          notEmpty: {
            msg: "Photo is required",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Vacancy name is required",
          },
          notEmpty: {
            msg: "Vacancy name is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Vacancy",
    }
  );
  return Vacancy;
};

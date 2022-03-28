"use strict";
const { Model } = require("sequelize");
// const phoneValidationRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Applicant.belongsTo(models.Vacancy, { foreignKey: "vacancyId" });
    }
  }
  Applicant.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          customValidator(value) {
            if (value[0] !== "0" && value.slice(0, 3) !== "+62") {
              throw new Error("Invalid phone number");
            }
          },
        },
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          customValidator(value) {
            if (value[0] !== "0" && value.slice(0, 3) !== "+62") {
              throw new Error("Invalid whatsapp number");
            }
          },
        },
      },
      vacancyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Vacancies",
          },
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate(inst) {
          if (inst.phoneNumber[0] === "0") {
            inst.phoneNumber = "+62" + inst.phoneNumber.slice(1);
          }
          if (inst.whatsapp[0] === "0") {
            inst.whatsapp = "+62" + inst.whatsapp.slice(1);
          }
        },
      },
      modelName: "Applicant",
    }
  );
  return Applicant;
};

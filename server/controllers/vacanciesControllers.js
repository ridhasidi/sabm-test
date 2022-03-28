const { Vacancy } = require("../models");

class Controller {
  static async readVacancies(req, res, next) {
    try {
      const vacancies = await Vacancy.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(vacancies);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

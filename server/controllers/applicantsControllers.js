const { Applicant } = require("../models");

class Controller {
  static async createApplicant(req, res, next) {
    try {
      const { name, phoneNumber, whatsapp, vacancyId } = req.body;
      const newApplicant = await Applicant.create({
        name,
        phoneNumber,
        whatsapp,
        vacancyId,
      });
      res.status(201).json(newApplicant);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

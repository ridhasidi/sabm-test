const express = require("express");
const router = express.Router();
const Controller = require("../controllers/vacanciesControllers");

router.get("/", Controller.readVacancies);
router.get("/:id", Controller.readOneVacancy);

module.exports = router;

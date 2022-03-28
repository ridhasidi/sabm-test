const express = require("express");
const router = express.Router();
const Controller = require("../controllers/applicantsControllers");

router.post("/", Controller.createApplicant);

module.exports = router;

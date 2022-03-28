const express = require("express");
const vacanciesRouter = require("./vacancies");
const applicatsRouter = require("./applicants");
const router = express.Router();

router.use("/vacancies", vacanciesRouter);

router.use("/applicants", applicatsRouter);

module.exports = router;

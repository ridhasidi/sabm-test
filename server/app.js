if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routers/index");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

// errorHandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

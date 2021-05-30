const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./router");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
// app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log("App is running on port" + PORT);
});

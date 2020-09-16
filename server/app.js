const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./router");
const cors = require("cors");

app.use(cors());
app.use("/", router);

app.listen(PORT, () => {
  console.log("App is running on port" + PORT);
});

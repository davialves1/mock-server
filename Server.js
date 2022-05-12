const express = require("express");
const cors = require("cors");
const dataset = require("./DataSet");
const datasetLarge = require("./DataSetLarge");

const port = 8080;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(datasetLarge);
});

app.get("/test", (req, res) => {
  res.send("App Running 🤩")
})

app.listen(port, () => console.log(`Server listening on port ${port}`));

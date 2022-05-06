const express = require("express");
const cors = require("cors");
const dataset = require("./DataSet");
const datasetLarge = require("./DataSetLarge");

const port = 8080;
const app = express();

app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })

app.get("/", (req, res) => {
  // res.send(datasetLarge);
  res.send("App Running 🙏");
});

app.get("/test", (req, res) => {
  res.send("App Running 🤩")
})

app.listen(port, () => console.log(`Server listening on port ${port}`));

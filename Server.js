const express = require("express");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const datasetLarge = require("./DataSetLarge");

const port = 8080;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend working 🥳");
});

app.get("/test", (req, res) => {
  res.send("App Running 🤩")
})

app.get("/dataset", (req, res) => {
  res.send(datasetLarge);
})

const sslServer = https.createServer({
  key: '',
  cert: ''
}, app)

// sslServer.listen(3443, () => console.log(`Server listening on port ${port}`));

app.listen(port, () => console.log(`Server listening on port ${port}`) )

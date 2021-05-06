const express = require("express");
const path = require("path");
const htmlFile = path.resolve(__dirname, "dist", "index.html");
const publicFile = path.resolve(__dirname, "dist");

const app = express();

app.use(express.static(publicFile));

app.get("/*", (req, res, next) => {
  res.sendFile(htmlFile);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});

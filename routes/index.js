const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = "instanceID.txt";
instanceID = "bleh"

// Read → Modify → Write
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;

  instanceID = data;
});

router.get("/", (req, res) => {
  res.render("index", { title: "Home Page", instID: instanceID});
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

module.exports = router;

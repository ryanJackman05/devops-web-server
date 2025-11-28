const express = require("express");
const router = express.Router();

router.get("/", (req, res) => { // doesn't need to include /user, because this path is ADDED ON to the /users route.
  res.render("users", { title: "Users List", users: ["Alice", "Bob"] });
});

module.exports = router;

const express = require("express");

const router = express.Router();

router.get("/things/:name/game/:id)", (req, res) => {
  res.send(`GET route on things ${req.params.id} ${req.params.name}`);
});
router.post("/", (req, res) => {
  res.send("POST route on things");
});

module.exports = router;

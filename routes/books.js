const express = require("express");
const router = express.Router();
const data = require("./../books-data");

router.get("/", (req, res) => {
  res.send(data);
});
router.get("/:id", (req, res) => {
  const getOneBook = data.books.filter((book) => book.isbn === req.params.id);
  res.send(
    `The Book is ${getOneBook[0].title}, the author is ${getOneBook[0].author}`
  );
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const filteredData = await data.books.filter((book) => {
    return book.isbn !== req.params.id;
  });
  res.json({
    message: `Book with id #${id} has been deleted`,
    data: filteredData,
  });
});
module.exports = router;

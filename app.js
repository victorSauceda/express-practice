const express = require("express");
const { books } = require("./books-data");
const app = express();
const data = require("./books-data");
const booksRouter = require("./routes/books");
app.set("view engine", "pug");
app.set("views", "./views");

app.use("/books", booksRouter);
app.listen(3001);

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8080;
const app = express();

const BookRouter = require("./routes/booksrouter");
const AuthRouter = require("./routes/auth");
const AdminRouter = require("./routes/admin");
const CartRouter = require("./routes/cart");
const SearchRouter = require("./routes/search");

mongoose.connect("mongodb://localhost:27017/ebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/book", BookRouter);
app.use("/uploads", express.static("uploads"));
app.use("/api/user", AuthRouter);
app.use("/api/admin", AdminRouter);
// app.use("/api/cart", CartRouter);
app.use("/api/search", SearchRouter);

app.listen(port, () => {
  console.log(`server running port ${port}`);
});

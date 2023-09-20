const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoute = require("./routes/Books");

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected"))
  .catch((err) => console.log(err));

app.use("/api/books", bookRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server is running in port ${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/todo_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log("Server Started"));

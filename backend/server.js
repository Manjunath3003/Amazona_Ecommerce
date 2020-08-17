import express from "express";
import data from "./data";
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});

//to convert from es6 to es5 we install babel, since node supports only ES5

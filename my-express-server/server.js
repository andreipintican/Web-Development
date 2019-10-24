//jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, my girlfriend</h1>");
})

app.get("/contact", (req, res) => {
  res.send("Contact me at: andreipintican@gmail.com")
});

app.get("/about", (req, res) => {
  res.send("My name is Alex");
})

app.get("/hobbies", (req, res)=> {
  res.send("<ul><li>Coffe</li><li>Beer</li></ul>")
})

app.listen(port, () => {
  console.log("Server stated on port 3000");
});

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=> {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=> {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The resultat of the calculation is: " + result);
});

app.get("/bmicalculator", (req, res)=> {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res)=> {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var resultbmi = weight/(height * height);

  res.send("Your BMI is " + resultbmi);
});

app.listen("3000", ()=>{
  console.log("Server is running on port 3000.");
});

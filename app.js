const fs = require("fs");
const path = require("path");

const express = require("express");

// reading files

const app = express();

app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/user-type", (req, res) => {
  res.render("user-type");
});

app.get("/login-form", (req, res) => {
  res.render("login-form");
});

app.get("/hero", (req, res) => {
  res.render("hero");
});

app.get("/selling-unit", (req, res) => {
  const customerItemsPath = path.join(__dirname, "data", "customer-item.json");
  const customerItemsData = fs.readFileSync(customerItemsPath);
  const customerItemsJson = JSON.parse(customerItemsData);

  res.render("selling-unit", { items: customerItemsJson });
});

app.post("/selling-unit", (req, res) => {
  const item = req.body;

  const selledItemsPath = path.join(__dirname, "data", "selled-items.json");
  const customerItemsPath = path.join(__dirname, "data", "customer-item.json");

  const selledItemsData = fs.readFileSync(selledItemsPath);
  const customerItemsData = fs.readFileSync(customerItemsPath);

  const selledItemsJson = JSON.parse(selledItemsData);
  const customerItemsJson = JSON.parse(customerItemsData);

  selledItemsJson.push(item);
  customerItemsJson.push(item);

  fs.writeFileSync(selledItemsPath, JSON.stringify(selledItemsJson));
  fs.writeFileSync(customerItemsPath, JSON.stringify(customerItemsJson));
  res.redirect("/selling-unit");
});

app.listen(3000);

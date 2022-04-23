const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Osieltorres10",
  database: "Netflix",
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("db connection successful!");
  }
});

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM entertainment", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(4000, () => {
  console.log(`Console server listening on port 4000.`);
});


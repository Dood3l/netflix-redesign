const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { default: isEmail } = require("validator/lib/isEmail");


const app = express();

const db2 = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password:"password",
    database: "form"
  });
  

  app.use(bodyParser.json())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded())


  app.get("/contact", (req, res) => {
      db2.query("SELECT * FROM form.contacts",
      (err, results) => {
        if (err) throw err;
        console.log(results);
        res.sendFile(__dirname = '/src/contact.js');


    })
  })
      
app.post('/contact', (req,res) => {

  const name = req.body.name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone = req.body.phone;

    db2.query("INSERT INTO contacts (name,last_name,email,phone)VALUES(?,?,?,?)"
    ,[name,last_name,email,phone]),
    (err, result) => {
      console.log(err);
    }
})

 
       
  db2.connect((err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("db2 connection successful!");
    }
  });
  
  app.listen(5000, () => {
    console.log(`Console server listening on port 5000.`);
  });
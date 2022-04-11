const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { default: isEmail } = require("validator/lib/isEmail");
const path = require('path')

const app = express();

let connection;

const db_config = {
  host: "us-cdbr-east-05.cleardb.net",
  user: "b6a78b825e0742",
  password:"ee3622fd",
  database: "heroku_f753746a4ee891d"
};

// const db2 = mysql.createConnection({
//     host: "us-cdbr-east-05.cleardb.net",
//     user: "b6a78b825e0742",
//     password:"ee3622fd",
//     database: "heroku_f753746a4ee891d"
//   });
  

  app.use(bodyParser.json())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded())


  app.get('/api/contact', (req, res) => {
      db_config.query('SELECT * FROM contacts',
      (err, results) => {
        if (err) throw err;
        console.log(results);
        res.sendFile(__dirname = '/src/contact.js');


    })
  })
      
app.post('/api/contact', (req,res) => {

  const name = req.body.name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone = req.body.phone;

    db_config.query('INSERT INTO contacts (name,last_name,email,phone)VALUES(?,?,?,?)'
    ,[name,last_name,email,phone]),
    (err, result) => {
      console.log(err);
    }
})

app.use(express.static(path.join(__dirname, './build')));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'))
})
       
// db_config.connect((err) => {
//   if (err) {
//     console.log(err);
//     return err;
//   } else {
//     console.log("db_config connection successful!");
//   }
// });
  
app.listen(process.env.PORT || 5000, function(){
  console.log(`Express is working on port 5000`)
});

function handleDisconnect() {
  connection = mysql.createConnection(db_config); 

  connection.connect(function(err) {              
    if(err) {                                    
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                     
  });                                     
                                          
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}
handleDisconnect();
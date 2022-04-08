const db2 = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password:"password",
    database: "form"
  });
  
  app.use(morgan('dev'))
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  
  app.post('/api/contact', async (req,res) => {
      const body = req.body
  
    await database.execute(` INSERT INTO contacts(
      name,
      last_name,
      email,
      phone,
      created_at
    )VALUES(
      @name,
      @last_name,
      @email,
      @phone,
      @created_at
    )`,{
      name:body.first,
      last_name:body.last_name,
      email:body.email,
      phone:body.phone,
  
    });
      
    
    res.end('Added user')
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
    console.log(`Console server listening on port 4000.`);
  });
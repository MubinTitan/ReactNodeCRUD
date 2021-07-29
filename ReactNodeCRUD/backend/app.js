
const path = require('path');
const express = require('express');
// const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));
 
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_crud'
});

connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 
 
//set views file
// app.set('views',path.join(__dirname,'views'));

//set view engine
// app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
var urlencodedParser = bodyParser.urlencoded({ extended: false });
 
app.get('/',(req, res) => {
    // res.send('CRUD Operation using NodeJS / ExpressJS / MySQL');
    let sql = "SELECT * FROM users";
    connection.query(sql, (err, rows) => {
        if(err) throw err;
        // res.render('user_index', {
        //     title : 'CRUD Operation using NodeJS and  MySQL',
        //     users : rows
        // });
        console.log(rows);
        var arr={"name":"mubin", "names":"titan", "ph":"45454"}
        res.send(rows)
    });

});
 
 
// app.post('/add',urlencodedParser ,(req, res) => {
//     var values = {
//         name: req.body.name,
//         email:req.body.email,
//         address=req.body.address
//     }
//     console.log(values)
// });
 
app.post('/save',(req, res) => { 
    let data = {name: req.body.name, email: req.body.email, phone_no: req.body.phone_no};
    let sql = "INSERT INTO users SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
});

app.get('/edit/:userId',(req, res) => {
    const userId = req.params.userId;
    let sql = `Select * from users where id = ${userId}`;
    console.log("the id is : ",userId)
    connection.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result)
        // res.render('user_edit', {
        //     title : 'CRUD Operation using NodeJS and  MySQL',
        //     user : result[0]
        // });
        res.send(result)
    });
});


app.post('/update/:userId',(req, res) => {
    const userId = req.body.id;
    let sql = "update users SET name='"+req.body.name+"',  email='"+req.body.email+"',  phone_no='"+req.body.phone_no+"' where id ="+userId;
    connection.query(sql,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
});
 
 
app.delete('/delete/:userId',(req, res) => {
    const userId = req.params.userId;
    console.log("this is the my delete id : " +userId)
    let sql = `DELETE from users where id = ${userId}`;
    connection.query(sql,(err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

 
// Server Listening
app.listen(4000, () => {
    console.log('Server is running at port 4000');
});
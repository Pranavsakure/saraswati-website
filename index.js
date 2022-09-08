const express = require('express')
const path = require('path');
var app = express()
const fs = require("fs");
const bodyparser = require('body-parser'); 
const port = process.env.PORT || 3000;
const router = express.Router();

const {Client} = require('pg');
const { ClientRequest } = require('http');
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"12345678",
    database:"test"
})
// async function main() {
//     await client.connect();  
// }
client.connect();


client.query(`SELECT * from idea`,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})







app.use(express.static('static'));
app.use(express.urlencoded())
// app.use(express.json());
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/',router);

app.post('/problems',(req,res)=>{
    client.query(
    `INSERT into query(no_roll,full_name,room_no,problems
    ) VALUES(
        '${req.body.roll_num}',
        '${req.body.name}',
        '${req.body.room_num}',
        '${req.body.problem}');`
    )
    res.end('Added Complain');
});
app.post('/suggestions',(req,res)=>{
    client.query(
    `INSERT into idea(suggest
    ) VALUES('${req.body.suggestion}');`
    )
    res.end('Added suggestions');
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
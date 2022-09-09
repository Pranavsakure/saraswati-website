const express = require('express')
const path = require('path');
var app = express()
const fs = require("fs");
const bodyparser = require('body-parser'); 
const port = process.env.PORT || 3000;
// var http = require("http");
const router = express.Router();

const {Client} = require('pg');
const { ClientRequest } = require('http');
const client = new Client({
    connectionString: "postgres://fqvwggjcqurjps:cce71a0db350ee28986906311a45e994f656da49a7809f5f0bfb18785be4b604@ec2-54-147-36-107.compute-1.amazonaws.com:5432/d8rcqkm49d0r0d",
    ssl: {
        rejectUnauthorized: false
        }
})
// async function main() {
//     await client.connect();  
// }
client.connect();


client.query(`SELECT * from query`,(err,res)=>{
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
router.get('/problems',function(req,res){
    res.sendFile(path.join(__dirname+'/problems.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/problems',router);

app.post('/problem',(req,res)=>{
    client.query(
    `INSERT into query(roll_no,full_name,room_no,problems
    ) VALUES(
        '${req.body.roll_num}',
        '${req.body.name}',
        '${req.body.room_num}',
        '${req.body.problem}');`
    )
    res.end('Added Complain');
})
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
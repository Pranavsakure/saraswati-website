const express = require('express')
const path = require('path');
var app = express()
const fs = require("fs")
const port = process.env.PORT || 3000;
const router = express.Router();

// app.METHOD(PATH,HANDLER)

// app.set('html',path.join(__dirname,'cauvery-website-main')); 

// app.get("/",(req,res)=>{ 
//     // res.set('Content-Type', 'text/html')
//     res.status(200).render(path.join(__dirname+'index.html'))
// });
app.use(express.static('static'));
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.use('/',router);

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
const express = require('express');
const path = require('path');
const user = require("./user.json");
const app = express();

const PORT = 3000;

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));

});
app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname,'home.html'));
});
app.get('/user',function(req,res){
    // res.sendFile(path.join(__dirname,'user.json'));
    res.json(user);

});

app.listen(PORT,function(){
    console.log(`escuchando ${PORT}`);
});

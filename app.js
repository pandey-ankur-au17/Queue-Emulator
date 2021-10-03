const { urlencoded } = require('express');
const express = require('express')
const server=express();

server.use(urlencoded({extended:true}))


server.use(express.static(__dirname));

server.get('/',(req,res) => {

    res.sendFile(`${__dirname}`+'/index.html')

});

server.get('*',(req,res) => {
    res.sendFile(`${__dirname}`+'/Error.html')

});

console.log(`Heroku Port number is ${process.env.PORT}`)

const prt =  process.env.PORT || 9080;


server.listen(prt, () => console.log(`Server started at PORT ${prt}`))
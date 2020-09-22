import config ,{nodeEnv} from './config'
//import https from 'https';
//import http from 'http';
import express from 'express';
//import fs from 'fs';
import apiRouter from './api';

const server = express();
server.listen(config.port,()=>{
    console.log('express is listening on port ', config.port);
});
server.get('/',(req,res)=>{
    //res.send("Hello Express");
    //render template from views folder using ejs
    res.render('index',{
        content:'Hello Express and <em>EJS</em>'
    });
});

//use ejs template engine
server.set('view engine','ejs');
server.use('/api',apiRouter);

//USING use to deliver static content from public folder
server.use(express.static('public'));
//USING fs module to deliver static content

// server.get('/about.html',(req,res)=>{
//     fs.readFile('./about.html',(err,data)=>{
//         res.send(data.toString());
//     });
// });
//USING node http and https modules
// const server  = http.createServer();

// server.listen(8080)
// server.on('request',(req,res)=>{
//     res.write("<h1>Hello World!</h1>")
//     setTimeout(()=>{
//         res.write('I can stream');
//         res.end();
//     },3000);
// });

// https.get('https://www.lynda.com', res=>{
//     console.log('Response Status Code:',res.statusCode);

//     res.on('data',chunk=>{
//         console.log(chunk.toString());
//     });
// });
// console.log(config.port,nodeEnv);


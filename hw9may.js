//Tasks for fs Module

// hw1
//const fs  = require('fs');
// const data = fs.readFileSync('hw3may.js', 'utf-8');
// console.log(data);

// hw2
// const fs =require("fs");
// const prompt =require("prompt-sync")();
 
// const path = prompt("Enter filename:  ");

// fs.stat(path,(error, stats) => {
//     if(error){
//         console.log(error);
//         return;
//     }else{
//         console.log("Bytes:", stats.size);
//         console.log("Last update: ", stats.mtime);
//         console.log("Birthtime:", stats.birthtime);
//     }
// });
 
//hw 3

// const fs = require("fs");
// const path =  require("path");

// fs.mkdirSync("./test-directory");

// const filepath = path.join('./test-directory', "test.txt");
// fs.writeFileSync(filepath, "hi"); // եթե չգրեի չէի տեսնի արդյունք հաջորդ տողում
// const files = fs.readdirSync("./test-directory");
// console.log(files);
// fs.rmSync("./test-directory", {recursive: true, force: true});


// hw 4

// const fs = require("fs");
// const path = require("path");

// const filepath = path.join('.', "permission.txt");

// fs.chmodSync(filepath,0o400);
// try{
//     fs.writeFileSync(filepath, "Hi");
// }catch(err){
//     console.log(err.message);
// }

// hw 5

// const fs = require("fs");

// fs.readFile("file.txt", "utf-8", (err, data)=>{
//   if(err){
//     console.err(err.message);
//     return;
// }
// console.log("async:  ", data);
// });
// const data = fs.readFileSync("file.txt", "utf-8");

// console.log("sync:  ", data);  // //ըստ event loop  ի կատարման հերթականության առաջնահերթ կատավում են sync գործողությունները










// //Tasks for path Module
// hw 1
// const path = require('path');
// const prompt = require("prompt-sync")();

// const filepath = prompt("enter filename:  ");
// const absolute = path.resolve(filepath);
// console.log(absolute);

// hw 2

// const prompt = require('prompt-sync')();
// const path = require('path');

// const filename = prompt("Enter filename:   ");
// const absolute = path.resolve(filename);
// const pars = path.parse(absolute);
// console.log(pars);

// hw 3
// const prompt = require("prompt-sync")();
// const path = require('path');

// const filename = prompt("enter filename: ");
// const dirname = prompt("enter dirname:  ");

// const x = path.join(dirname, filename);

// console.log(x);



//hw 4

// const prompt = require("prompt-sync")();
// const path = require('path');

// const absolute = path.resolve(prompt("enter filename:  "));

// const ext = path.extname(absolute);

// console.log(ext);

// hw 5

// const prompt = require('prompt-sync')();
// const path = require('path');

// const absolute = path.resolve(prompt("Enter filename: "));
// const x = path.dirname(absolute);
// console.log(x);









//Tasks for events Module

// hw 1

// const EventEmitter = require('events');

// const emmiter = new EventEmitter;

// emmiter.on('greeting', ()=>{
//     console.log("hello");
// });

// emmiter.emit(greeting);











//Tasks for http Module

//hw1 

// const http = require('http');

// http.createServer((req, res)=>{
//     res.write('hello world');
//     res.end();
// }).listen(8080);


// hw 2

// const http = require('http');

// http.createServer((req, res)=>{
//     let url = req.url;
//     if(url === '/'){
//         res.write('main page');
//         res.end();
//     }else if(url === '/about'){
//         res.write('about');
//         res.end();
//     }else{
//         res.write('error');
//         res.end();
//     }
// }).listen(8080);

// hw 3

// const http = require('http');

// http.createServer((req, res)=>{
//     if(req.method === 'POST' && req.url === '/submit'){
//         let body;

//         req.on('data', chunk=>{
//             body += chunk.toString();
//         });

//         req.on('end', ()=>{
//             console.log(body.toString());
//             res.end("ok");
//         });
        
//     }else{
//         res.write('Error');
//         res.end();
//     }
// }).listen(8080, ()=>{console.log("server listen port 8080")});

//hw 4 

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) =>{
//     if(req.url === '/home'){
//         const file = fs.readFileSync('./index.html', 'utf-8');
//         res.end(file);
//     }else{
//         res.end("404");
//     }
// }).listen(8080, ()=>{console.log('Server listen 8080')});


// hw 5

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// http.createServer((req, res) => {
//     let route = req.url === '/' ? '/index.html' : req.url;
//     const filepath = path.join(__dirname, route);

//     if (fs.existsSync(filepath) && fs.statSync(filepath).isFile()) {
//         let file = fs.readFileSync(filepath, 'utf-8');
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(file);
//     } else {
//         const errorfile = fs.readFileSync('./404.html', 'utf-8');
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end(errorfile);
//     }

// }).listen(8080, () => {
//     console.log("server listen 8080");
// });





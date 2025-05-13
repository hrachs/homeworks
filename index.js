const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('hello Api');
});

app.get('/users', (req, res)=>{
    const userlist = fs.readFileSync('users.json', 'utf-8');
  
    res.send(userlist);
});

app.listen(PORT, ()=>{console.log(`Server home -> http//localhost:${PORT}\n 
//Server users -> http//localhost/users:${PORT}`)});


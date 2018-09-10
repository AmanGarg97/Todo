const express = require('express');
const server = express();

const todos = require('./routes/todos.js')

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/todo' , todos)



server.listen(2233);

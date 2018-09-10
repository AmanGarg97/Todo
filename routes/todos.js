const route = require('express').Router();

let todos = [
    
        {task: "Do Code" , value: "done"},
        {task: "Go to Market" , value: "done"},
        {task: "Revise" , value: "not done"},
        {task: "See Events" , value: " not done"}


    
]
route.post('/add', (req,res) => {
    todos.push({
        task : req.body.task,
        value : req.body.value
    })
    res.send(todos)
})
route.get('/' , (req,res) => res.send(todos))
route.get('/:id' , (req,res)=> res.send(todos[req.params.id]))
route.delete('/del/:id' , (req,res) => {

    let v = parseInt(req.params.id) - 1 
    todos.splice(v , 1)
    res.send(todos)

})

route.patch('patch/:id',(req,res) => {
    let v = parseInt(req.params.id) - 1 

    todos.push({
        task : req.body.task,
        value : req.body.value
    })

    res.send(todos)
})

module.exports = route;
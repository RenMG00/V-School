const express = require("express")
const todoRouter = express.Router()
const {v4: uuid} = require("uuid")

const todosArray= [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    {
        name: "Other name",
        description: "The description",
        imageUrl: "http://www.myimage.....",
        completed: true,
        _id: uuid()
    }
]

todoRouter.get("/", (req, res) => {
    res.send(todosArray)
})

todoRouter.get("/:todoId" , (req, res) => {
const todoId = req.params.todoId
const locatedTodo = todosArray.find(todo => todo._id === todoId)
res.send(locatedTodo)
})
todoRouter.delete("/:todoId" , (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todosArray.findIndex(todo => todo._id === todoId)
    todosArray.splice(todoIndex, 1)
    res.send("successfully deleted todo")
})
todoRouter.put("/:todoId" , (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todosArray.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todosArray[todoIndex], req.body)
    res.send(updatedTodo)
})

module.exports = todoRouter
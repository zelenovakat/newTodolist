import React from "react"
// import { useLocalStorage } from "../helper/useLocalStorage"

// import { updateObjectInArrayById } from "../helper/updateObjectInArrayById"
// import Todos from "./Todos"

export const defaultTodos = [
  { id: 1, content: "morning walk", status: "true" },
  { id: 2, content: "meeting with John", status: "false" },
  { id: 3, content: "Buy pizza from Pizzahut", status: "false" },
]

const DefaultTodos = () => {
  // const [todos, setTodos] = useLocalStorage("todos", defaultTodos)

  // const addTodo = (todo) => {
  //   todo.id = Math.random()
  //   const updatedTodos = [...todos, todo]
  //   setTodos(updatedTodos)
  // }

  // const toggleStatus = (id) => {
  //   const selectedTodo = todos.find((todo) => todo.id === id)
  //   selectedTodo.status = selectedTodo.status === "true" ? "false" : "true"
  //   setTodos(updateObjectInArrayById(todos, selectedTodo))
  // }

  return <div>{/* <Todos todos={todos} toggleStatus={toggleStatus} /> */}</div>
}

export default DefaultTodos

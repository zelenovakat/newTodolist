import React from "react"
import TopPart from "../src/header/TopPart"
import styled from "styled-components"
import MappTodos from "../src/todoPart/MappTodos"
import { useLocalStorage } from "../src/helper/useLocalStorage"
import { updateObjectInArrayById } from "../src/helper/updateObjectInArrayById"
import AddTodo from "../src/todoPart/AddTodo"

const defaultTodos = [
  { id: 1, content: "morning walk", status: "true" },
  { id: 2, content: "meeting with John", status: "false" },
  { id: 3, content: "Buy pizza from Pizzahut", status: "false" },
]

const App = () => {
  const [todos, setTodos] = useLocalStorage("todos", defaultTodos)

  const addTodo = (todo) => {
    console.log(todo)
    todo.id = Math.random()
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
  }

  const toggleStatus = (id) => {
    console.log(id)
    const selectedTodo = todos.find((todo) => todo.id === id)
    selectedTodo.status = selectedTodo.status === "true" ? "false" : "true"
    setTodos(updateObjectInArrayById(todos, selectedTodo))
  }

  return (
    <MainWrapper>
      <header>
        <TopPart />
        <MappTodos todos={todos} toggleStatus={toggleStatus} />
      </header>
      <TodoPart>
        <AddTodo addTodo={addTodo} />
      </TodoPart>
    </MainWrapper>
  )
}

export default App
const MainWrapper = styled.div`
  background-color: #fef8ec;
`
const TodoPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

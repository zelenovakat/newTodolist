import React, { useState } from "react"
import TopPart from "../src/header/TopPart"
import styled from "styled-components"
import MappTodos from "../src/todoPart/MappTodos"
import { useLocalStorage } from "../src/helper/useLocalStorage"
import { updateObjectInArrayById } from "../src/helper/updateObjectInArrayById"
import AddTodo from "../src/todoPart/AddTodo"
// import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons"
import ProgressBar from "../src/header/ProgressBar"
const defaultTodos = [
  { id: 1, content: "morning walk", status: true },
  { id: 2, content: "meeting with John", status: false },
  { id: 3, content: "Buy pizza from Pizzahut", status: false },
]

const App = () => {
  const [todos, setTodos] = useLocalStorage("todos", defaultTodos)
  const [openedMenuId, setOpenedMenuId] = useState(false)

  const filteredtodos = todos.filter((item) => item.status)

  const allTodosCount = todos.length

  const completedTodosCount = filteredtodos.length

  const updateTodo = (newValue, todo) => {
    // todo.content = newValue
    const updatedTodo = { ...todo, content: newValue }
    setTodos(updateObjectInArrayById(todos, updatedTodo))
    console.log("new vlue", newValue)
    console.log("old todo", todo)
  }

  const addTodo = (todo) => {
    todo.id = Math.random()
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
  }

  const toggleStatus = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id)
    selectedTodo.status = selectedTodo.status === true ? false : true
    setTodos(updateObjectInArrayById(todos, selectedTodo))
  }

  const removeTodo = (todoId) => {
    const todosWithoutOne = todos.filter((todo) => todo.id !== todoId)
    setTodos(todosWithoutOne)
  }

  const toggleMenu = (id) => {
    setOpenedMenuId(id)
    if (openedMenuId === id) {
      setOpenedMenuId("")
    }
  }

  return (
    <MainWrapper>
      <header>
        <TopPart />
        <ProgressWrapper>
          <ProgressBar allTodosCount={allTodosCount} completedTodosCount={completedTodosCount} />
        </ProgressWrapper>
        <MappTodos
          todos={todos}
          openedMenuId={openedMenuId}
          removeTodo={removeTodo}
          toggleStatus={toggleStatus}
          toggleMenu={toggleMenu}
          updateTodo={updateTodo}
        />
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
const ProgressWrapper = styled.div`
  margin: 20px;
`

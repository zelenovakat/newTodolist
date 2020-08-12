import React from "react"
import TopPart from "../src/header/TopPart"
import styled from "styled-components"
import Todos from "../src/todoPart/Todos"
import ButtonAddTodo from "./todoPart/ButtonAddTodo"
function App() {
  return (
    <MainWrapper>
      <header>
        <TopPart />
        <Todos />
      </header>
      <TodoPart>
        <ButtonAddTodo />
      </TodoPart>
    </MainWrapper>
  )
}

export default App
const MainWrapper = styled.div`
  background-color: #fef8ec;
`
const TodoPart = styled.div``

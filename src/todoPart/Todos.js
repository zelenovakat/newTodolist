import React from "react"
import { defaultTodos } from "./DefaultTodos"
import styled from "styled-components"
import Checkbox from "@material-ui/core/Checkbox"

const Todos = () => {
  const mappedList = defaultTodos.map((todo) => {
    return (
      <MainDiv key={todo.id}>
        <OneTodo key={todo.id}>
          <Checkbox
            checked={todo.status === "true"}
            value="status"
            color="primary"
            inputProps={{
              "aria-label": "todo status checkbox",
            }}
          />
          <span>{todo.content}</span>
        </OneTodo>
      </MainDiv>
    )
  })

  return <div>{mappedList}</div>
}

export default Todos

const OneTodo = styled.div``
const MainDiv = styled.div``

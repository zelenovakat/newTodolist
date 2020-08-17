import React from "react"
import styled from "styled-components"
import Checkbox from "@material-ui/core/Checkbox"

const MappTodos = ({ todos, toggleStatus }) => {
  const mappedList = todos.map((todo) => {
    return (
      <MainDiv key={todo.id}>
        <OneTodo className={`todo-finished-${todo.status}`} onClick={() => toggleStatus(todo.id)}>
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

export default MappTodos

const OneTodo = styled.div``
const MainDiv = styled.div``

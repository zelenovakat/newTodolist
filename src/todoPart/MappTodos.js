import React, { useState } from "react"
import styled from "styled-components"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"

import MoreVertIcon from "@material-ui/icons/MoreVert"

const MappTodos = ({ todos, toggleStatus, removeTodo }) => {
  const [isMenuShown, setMenuShown] = useState(false)

  const toggleMenu = () => {
    setMenuShown(!isMenuShown)
  }

  const mappedList = todos.map((todo) => {
    return (
      <MainDiv key={todo.id}>
        <OneTodo
          key={todo.id}
          className={`todo-finished-${todo.status}`}
          onClick={() => toggleStatus(todo.id)}>
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
        <div>
          <IconButton onClick={toggleMenu}>
            <MoreVertIcon />
          </IconButton>
          {isMenuShown && (
            <Menu>
              <button>edit</button>
              <button onClick={() => removeTodo(todo.id)}>remove</button>
            </Menu>
          )}
        </div>
      </MainDiv>
    )
  })

  return <div>{mappedList}</div>
}

export default MappTodos

const OneTodo = styled.div`
  svg {
    color: #4355a9;
  }
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #818cc3;
  margin: 10px 20px;
  border-radius: 10px;
  background-color: #fefaf2;
`
const Menu = styled.div``

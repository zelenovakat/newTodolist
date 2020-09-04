import React, { useState } from "react"
import styled from "styled-components"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import { mediaSmall, mediaXs } from "../helper/screen"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const MappTodos = ({ todos, toggleStatus, removeTodo, updateTodo }) => {
  const [editTodoId, setEditTodoId] = useState(false)
  const [openedMenuId, setOpenedMenuId] = useState(false)

  const editTodo = (id) => {
    setEditTodoId(id)
    setOpenedMenuId(false)
    if (editTodoId === id) {
      setEditTodoId("")
    }
  }

  const toggleMenu = (id) => {
    setOpenedMenuId(id)
    if (openedMenuId === id) {
      setOpenedMenuId("")
    }
  }

  const resetInput = () => {
    setEditTodoId("")
  }

  const mappedList = todos.map((todo) => {
    return (
      <MainDiv key={todo.id}>
        <OneTodo className={`todo-finished-${todo.status}`}>
          <Checkbox
            onClick={() => toggleStatus(todo.id)}
            checked={todo.status === true}
            value="status"
            color="primary"
            inputProps={{
              "aria-label": "todo status checkbox",
            }}
          />
          {editTodoId === todo.id ? (
            <MainWrapperInput>
              <WrapperInputTodo
                type="text"
                value={todo.content}
                onChange={(e) => {
                  updateTodo(e.target.value, todo)
                }}
              />
              <SaveIcon>
                <FontAwesomeIcon onClick={resetInput} icon={faCheckCircle} />
              </SaveIcon>
            </MainWrapperInput>
          ) : (
            <WrapperSpanTodo>{todo.content}</WrapperSpanTodo>
          )}
        </OneTodo>

        <MenuWrapper>
          <IconButton onClick={() => toggleMenu(todo.id)}>
            <MoreVertIcon />
          </IconButton>
          {openedMenuId === todo.id && (
            <Menu>
              <button type="button" onClick={() => editTodo(todo.id)}>
                Edit
              </button>
              <MiddleLine></MiddleLine>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </Menu>
          )}
        </MenuWrapper>
      </MainDiv>
    )
  })

  return (
    <div>
      <div>{mappedList}</div>
    </div>
  )
}

export default MappTodos
const MainWrapperInput = styled.div`
  display: flex;
`

const SaveIcon = styled.div`
  svg {
    margin: 5px;
  }
`
const WrapperInputTodo = styled.input`
  border: none;
  background: transparent;
  font-size: 17px;
  overflow-wrap: anywhere;
  :focus {
    outline: none;
  }
`
const WrapperSpanTodo = styled.span`
  font-size: 17px;
  overflow-wrap: anywhere;
`

const MenuWrapper = styled.div`
  display: flex;
  svg {
    color: #4355a9;
  }
`
const MiddleLine = styled.div`
  border-bottom: 2px solid #ded9d9;
  margin: 3px 0;
`
const OneTodo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  svg {
    color: #4355a9;
  }
`
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #818cc3;
  margin: 20px 20px;
  position: relative;
  border-radius: 10px;
  background-color: #fefaf2;
  ${mediaSmall} {
    margin: 23px 20px;
  }
`
const Menu = styled.div`
  position: absolute;
  right: 40px;
  top: -11px;
  z-index: 9999;
  background-color: #ffffff;
  border: 1px solid #ded9d9;
  display: flex;
  flex-direction: column;
  button {
    border: none;
    background-color: #ffffff;
    color: #000000;
    margin: 3px;
    font-size: 15px;
    padding: 5px;
    ${mediaSmall} {
      font-size: 20px;
    }
  }
`

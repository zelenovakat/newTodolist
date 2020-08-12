import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import AddTodo from "../todoPart/AddTodo"

const ButtonAddTodo = () => {
  const [showInput, setShowInput] = useState(false)
  const onClick = () => setShowInput(true)
  return (
    <div>
      <Button onClick={onClick}>
        <FontAwesomeIcon icon={faPlusCircle} />
        {showInput ? <AddTodo /> : null}
      </Button>
    </div>
  )
}

export default ButtonAddTodo

const Button = styled.button`
  border: none;
  background: transparent;
  svg {
    font-size: 50px;
    color: #4355a9;
  }
  :focus {
    background-color: transparent;
  }
`

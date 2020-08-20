import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
// import { faTimes } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("")
  const [showInput, setShowInput] = useState(false)

  const onClick = () => {
    setShowInput(true)
  }

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo({ content })
    setShowInput(false)
    setContent("")
  }

  return (
    <ButtonAddTodo onClick={onClick}>
      <FontAwesomeIcon icon={faPlusCircle} />
      {showInput ? (
        <div>
          <form onSubmit={handleSubmit}>
            <h4>New Todo</h4>
            {/* <FontAwesomeIcon icon={faTimes} /> */}
            <input
              type="text"
              onChange={handleChange}
              value={content}
              placeholder="add todo"></input>
          </form>
        </div>
      ) : null}
    </ButtonAddTodo>
  )
}

export default AddTodo

const ButtonAddTodo = styled.button`
  border: none;
  background: transparent;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  width: 100%;
  padding: 0;
  margin: 10px 20px;
  svg {
    font-size: 50px;
    color: #4355a9;
    margin-top: 100px;
  }
  :hover {
    background-color: transparent;
    outline: none;
  }
  :focus {
    outline: none;
  }
  div {
    width: 100%;
  }
  input {
    border: 2px solid #818cc3;
    border-radius: 10px;
    background-color: #fefaf2;
    padding: 12px;
    font-size: 15px;
    :focus {
      outline: none;
    }
  }
  form {
    display: flex;
    flex-direction: column;
  }
`

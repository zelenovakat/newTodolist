import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("")
  const [isShowInput, setShowInput] = useState(false)

  const toggleButton = () => {
    setShowInput(!isShowInput)
    if (content.length) {
      addTodo({ content })
      setContent("")
    }
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
    <MainWrapper>
      <ButtonAddTodo onClick={toggleButton}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </ButtonAddTodo>
      {isShowInput && (
        <div>
          <form onSubmit={handleSubmit}>
            <h4>New Todo</h4>
            <input
              type="text"
              onChange={handleChange}
              value={content}
              placeholder="add todo"></input>
          </form>
        </div>
      )}
    </MainWrapper>
  )
}

export default AddTodo

// const AddIcon = styled.div``

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  width: 100%;
  padding: 0;
  margin: 10px 20px;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
  h4 {
    display: flex;
    justify-content: center;
  }
`

const ButtonAddTodo = styled.button`
  background: transparent;
  border: none;
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
`

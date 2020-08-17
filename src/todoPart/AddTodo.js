import React, { useState } from "react"

const AddTodo = (props) => {
  const [content, setContent] = useState("")
  const addTodo = props
  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(content)
    console.log(content)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>New Todo</h4>
        <input type="text" onChange={handleChange} value={content}></input>
      </form>
    </div>
  )
}

export default AddTodo

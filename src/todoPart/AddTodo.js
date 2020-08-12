import React, { useState } from "react"

const AddTodo = () => {
  const [content, setContent] = useState("")
  const handleSubmit = (data) => {
    setContent(data)
  }
  const handleChange = (data) => {
    console.log(data)
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

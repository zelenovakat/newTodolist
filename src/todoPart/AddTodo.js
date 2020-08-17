import React, { useState } from "react"

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("")

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(content)
    setContent({ content: "" })
  }
  //   console.log(content)

  // setContent(addTodo({ content: "" }))

  //   props.addTodo(content)
  //   setContent({
  //     content: "",
  //   })

  // submit = (e) => {
  //   e.preventDefault()
  //   this.props.addTodo(this.state.input)
  //   this.setState({ input: "" })
  // }

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

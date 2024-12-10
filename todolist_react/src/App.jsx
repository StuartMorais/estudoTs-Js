import { useState } from "react"
import "./style.css"

export default function app(){
  const [newItem, setNetItem] = useState("")
  const [todos, setTodos] = useStates([])

  function handleSubmit() {
    e.preventDefault()

    setTodos((correntTodos) =>{
      return [
        ...correntTodos, { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNetItem(e.target.value)} type="text" id="item"/>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return <li>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        })}
      </ul>
    </>
  )
}
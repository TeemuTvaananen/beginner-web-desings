import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"
import "./styles.css"
import { TodoItemList } from "./TodoItemList"

export default function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const localvalue = localStorage.getItem("ITEMS")
    if(localvalue == null) return []

    return JSON.parse(localvalue)
  })

useEffect(() => {
localStorage.setItem("ITEMS", JSON.stringify(todoItems))
}, [todoItems])


  function addTodoItem(title) {
    setTodoItems(currentTodoItems => {
      return [
        ...currentTodoItems, { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }


  function toggleTodoItem(id, completed) {
    setTodoItems(currentTodoItems => {
      return currentTodoItems.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodoItem(id) {
    setTodoItems(currentTodoItems => {
      return currentTodoItems.filter(todo => todo.id !== id)
    }) 
  }


  console.log(todoItems)
  return (
    <>
      <TodoForm onSubmit={addTodoItem} />
      <h1 className="header">Todo list</h1>
      <TodoItemList todoItems={todoItems} toggleTodoItem={toggleTodoItem} deleteTodoItem={deleteTodoItem}/>
    </>
  )
}
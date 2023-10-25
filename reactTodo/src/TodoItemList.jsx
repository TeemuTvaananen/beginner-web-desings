import { TodoItem } from "./TodoItem"

export function TodoItemList( { todoItems, toggleTodoItem, deleteTodoItem } ){
    return(
    <ul className="list">
    {todoItems.length === 0 && "Nothing to do yet..."}
    {todoItems.map(todo => {
      return (
       <TodoItem {...todo} key={todo.id} toggleTodoItem={toggleTodoItem} deleteTodoItem={deleteTodoItem}/>
      )
    })}
  </ul>
    )
}
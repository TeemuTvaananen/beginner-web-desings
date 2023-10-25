export function TodoItem({ completed, id, title, toggleTodoItem, deleteTodoItem }){
    return(
        <li>
        <label>
          <input type="checkbox" checked={completed}
            onChange={e => toggleTodoItem(id, e.target.checked)}  />
          {title}
        </label>
        <button  onClick={() => deleteTodoItem(id)}  className="btn btn-danger">Delete</button>
      </li>
    )
}
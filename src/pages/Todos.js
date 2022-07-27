import React, {useState, useEffect} from 'react'

const Todos = () => {
    const[todos, setTodos] = useState([])
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/todos")
        .then((respnse) => respnse.json())
        .then(todos => setTodos(todos))
    }, [])
  return (
    <div>
       <h1>Hello, this is just a goal post</h1>
      {todos.map((todo) => {
        return(
            <h1 key={todo.id}>{todo.title}</h1>
        )
      })}
    </div>
  )
}

export default Todos




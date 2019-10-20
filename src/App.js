import React, {useState} from 'react';

import {observer} from 'mobx-react'

const Todo = observer(({todo}) => {
    return (<li
    key={todo.id}
    style={{textDecoration : todo.done ? "line-through" : ""}}
    onClick={() => todo.mark(!todo.done)}>
    {todo.value}
  </li>)
})


const App = observer((props) => {
  const [value, setValue] = useState("")
  return (
    <div className="App">
    <form  onSubmit={e => {
      e.preventDefault(); props.todoList.addTodo(value)}}>

    <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
    </form>
    <ul>
      {props.todoList.list.map((todo) =>
        <Todo key={todo.id} todo={todo}/>
      )}
    </ul>
    </div>
  );
})

export default App;

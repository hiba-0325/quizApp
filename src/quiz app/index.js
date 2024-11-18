
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo,toggleTodo,removeTodo} from './todoSlice'

const TodoList = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ backgroundColor: todo.done ? 'green' : 'red' }}>
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Done
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


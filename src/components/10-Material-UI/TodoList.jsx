import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
  { id: uuid(), text: 'Feed the cat', completed: false },
  { id: uuid(), text: 'Stretch out ', completed: true },
  { id: uuid(), text: 'Call my mother', completed: false },
  { id: uuid(), text: 'Read the Bible', completed: true },
  { id: uuid(), text: 'Meditate', completed: false },
];

// console.log(initialTodos)

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));

  const toggleTodo = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );

  const addTodo = (text) => {
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return setTodos((prevTodos) => [
      ...prevTodos,
      { text: capitalizeFirstLetter(text), id: uuid(), completed: false },
    ]);
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={() => removeTodo(todo.id)}
            toggle={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </>
  );
}

/*
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => {
        // Destructuring assignment syntax.
        const { id } = todo;

        return (
          <TodoItem
            key={id}
            todo={todo}
            removeTodo={() => removeTodo(id)}
            toggle={() => toggleTodo(id)}
          />
        );
      })}
  </List>
*/

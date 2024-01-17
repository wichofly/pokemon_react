import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import List from '@mui/material/List';
import TodoItem from './TodoItem';

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

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={() => removeTodo(todo.id)}
        />
      ))}
    </List>
  );
}

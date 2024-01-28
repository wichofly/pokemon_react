import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('todos'));

  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));

  // Select that is done!
  const toggleTodo = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((done) => {
        // Item is done or not done!
        if (done.id === id) {
          return { ...done, completed: !done.completed };
        } else {
          return done;
        }
      })
    );

  // Add new Item
  const addTodo = (text) => {
    const capitalizeFirstLetter = (item) =>
      item.charAt(0).toUpperCase() + item.slice(1);

    if (text.trim() === '') {
      return; // Do not add an item when there is string to the to-do list
    }

    return setTodos((prevTodos) => [
      ...prevTodos,
      { text: capitalizeFirstLetter(text), id: uuid(), completed: false },
    ]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        To-Do List
      </Typography>
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
    </Box>
  );
}

/*

const initialTodos = [
  { id: uuid(), text: 'Feed the cat', completed: false },
  { id: uuid(), text: 'Stretch out ', completed: true },
  { id: uuid(), text: 'Call my mother', completed: false },
  { id: uuid(), text: 'Read the Bible', completed: true },
  { id: uuid(), text: 'Meditate', completed: false },
];
console.log(initialTodos)
--------------------------------------------------------------------------------------------

// Select that is done!
  const toggleTodo = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((done) => { // Item is done or not done!
        if (done.id === id) {
          return { ...done, completed: !done.completed };
        } else {
          return done;
        }
      })
    );

  - For each  done  item in the  prevTodos  array, the code checks if the  id  of the item matches the given  id . 
  - If the id matches, a new object is created using the spread syntax ( { ...done } ) to copy all the properties of the original done object.
  - The completed property of the new object is negated using the  !  NOT operator to toggle its value.
  - If the  id  doesn't match, the original  done  object is returned as it is.

  For each todo, it checks if the  id  of the todo matches the given  id . 
  If it does, it creates a new object with the same properties as the original todo but with the  completed  property negated (i.e., toggled). 
  If the  id  does not match, it simply returns the original todo object.  
--------------------------------------------------------------------------------------------

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
  --------------------------------------------------------------------------------------------

  In case UUID() is not using as npm, is used:
    - id: crypto.randomUUID()

*/

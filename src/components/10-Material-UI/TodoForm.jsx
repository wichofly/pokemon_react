import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Create } from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { cyan } from '@mui/material/colors';

import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    addTodo(text);
    setText('');
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Add Item"
          variant="standard"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create to-do" edge="end" type="submit">
                  <Create
                    sx={{
                      color: cyan[300],
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
};

export default TodoForm;

/*
  - when working with events, particularly form events, the "evt.target.value" property plays a crucial role in accessing and manipulating the data entered by the user. 
    It allows you to retrieve the current value of the form element that triggered the event. 
  - When to use "evt.target.value"** 
    You typically use "evt.target.value" in event handlers, such as "onclick","onchange" or "onsubmit," to capture and process the user's input.

  ° "evt.preventDefault()"
    Prevent the default form submission behavior
*/
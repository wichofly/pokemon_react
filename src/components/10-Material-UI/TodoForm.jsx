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
          label="Type"
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

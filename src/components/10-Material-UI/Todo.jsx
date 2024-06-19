import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import background from '../../Images/background.webp';

import TodoList from './TodoList';
import Navbar from './Navbar';

const Todo = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#EADBC8', // Fills the empty spaces with a similar color
        color: '#333333', // Dark gray text color
      }}
    >
      <CssBaseline />
      <Navbar />
      <TodoList />
    </Box>
  );
};

export default Todo;

/*
  - <CssBaseline />:
    - When the application is run, the <CssBaseline /> component applies basic CSS styles to the entire application, such as setting default font styles, margins, and padding. 
    - By using <CssBaseline />, developers can ensure a consistent and visually appealing baseline styling for their React application, without having to manually define and apply these styles themselves.
*/

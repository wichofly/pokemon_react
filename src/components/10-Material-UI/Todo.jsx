import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import Navbar from './Navbar';

const Todo = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </div>
  );
};

export default Todo;

/*
  - <CssBaseline />:
    - When the application is run, the <CssBaseline /> component applies basic CSS styles to the entire application, such as setting default font styles, margins, and padding. 
    - By using <CssBaseline />, developers can ensure a consistent and visually appealing baseline styling for their React application, without having to manually define and apply these styles themselves.
*/

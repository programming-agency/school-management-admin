import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import PublicLayout from './layouts/public/PublicLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import App from './App';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import PrivateLayout from './layouts/private/PrivateLayout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Student } from './pages/Student/Student';
import { Teacher } from './pages/Teacher/Teacher';
import { Notices } from './pages/Notices/Notices';
import { AddTeacher } from './pages/AddTeacher/AddTeacher';
import { AddStudent } from './pages/AddStudent/AddStudent';
import { SERVER_URL } from './config/config';



const THEME = createTheme({
  typography: {
    "fontFamily": `"Barlow", "sans-serif", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 500,
    "fontWeightMedium": 600
  }
});
const Root = () => {
  useEffect(() => {
    axios.defaults.baseURL = SERVER_URL;
  }, []);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>

        {/* User routes start */}
        <Route index element={<Navigate to='/app' />} />
        <Route path='/app' element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Student />} />
          <Route path="teachers" element={<Teacher />} />
          <Route path="notices" element={<Notices />} />
          <Route path="addTeacher" element={<AddTeacher />} />
          <Route path="addStudent" element={<AddStudent />} />





        </Route>
        {/* User routes end */}

        {/* Auth routes start */}
        <Route path='/auth' element={<PublicLayout />}>
          <Route index element={<Navigate to={'/auth/login'} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* Auth routes end */}

        {/* Not found route start */}
        <Route path='*' element={<Navigate to={'/'} />} />
        {/* Not found route end */}
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <ThemeProvider theme={THEME}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};


ReactDOM.render(<Root />, document.getElementById('root'));
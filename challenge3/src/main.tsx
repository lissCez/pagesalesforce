import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/index.tsx';
import Login from './Pages/Login/index.tsx';
import TesteUmMes from './Pages/TesteUmMes/index.tsx';
import Quiz from './Pages/Quiz/index.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:'/Login',
    element: <Login/>,
  },
  {
    path:'/TesteUmMes',
    element:<TesteUmMes/>,
  },
  {
    path:'/Quiz',
    element:<Quiz/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
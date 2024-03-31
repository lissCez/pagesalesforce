import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/index.tsx'
import About from './About/index.tsx';
import Login from './Login/index.tsx';
import Teste10Minutos from './Teste10Minutos/index.tsx';
import TesteUmMes from './TesteUmMes/index.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:'/Login',
    element: <Login/>,
  },
  {
    path:'/Teste10Minutos',
    element:<Teste10Minutos/>,
  },
  {
    path:'/TesteUmMes',
    element:<TesteUmMes/>,
  },
  {
    path:'/About',
    element:<About/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
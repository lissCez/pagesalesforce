import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
<<<<<<< HEAD
import Home from './Pages/Home/index.tsx';
import Login from './Pages/Login/index.tsx';
import TesteUmMes from './Pages/TesteUmMes/index.tsx';
import Quiz from './Pages/Quiz/index.tsx';
=======
import Home from './Home/index.tsx'
import About from './About/index.tsx';
import Login from './Login/index.tsx';
import Teste10Minutos from './Teste10Minutos/index.tsx';
import TesteUmMes from './TesteUmMes/index.tsx';
>>>>>>> 6a6667675b2272c4c55ee668398416faeb99fb9b

const router = createBrowserRouter([
  {
    path:"/",
<<<<<<< HEAD
    element: <Home/>,
=======
    element: <Home/>
>>>>>>> 6a6667675b2272c4c55ee668398416faeb99fb9b
  },
  {
    path:'/Login',
    element: <Login/>,
  },
  {
<<<<<<< HEAD
=======
    path:'/Teste10Minutos',
    element:<Teste10Minutos/>,
  },
  {
>>>>>>> 6a6667675b2272c4c55ee668398416faeb99fb9b
    path:'/TesteUmMes',
    element:<TesteUmMes/>,
  },
  {
<<<<<<< HEAD
    path:'/Quiz',
    element:<Quiz/>
=======
    path:'/About',
    element:<About/>
>>>>>>> 6a6667675b2272c4c55ee668398416faeb99fb9b
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
<<<<<<< HEAD
)
=======
)
>>>>>>> 6a6667675b2272c4c55ee668398416faeb99fb9b

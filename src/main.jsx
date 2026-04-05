import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index:true,
        Component:Home
      },
      {
        path:'mobiles',
        Component: Mobiles
      }
    ]
  },
  {
    path:"About me here",
    element: <div>About Me</div>
  },
  {
    path:"dept",
    element: <div>Department of ICT</div>
  },
  {
    path:"app" ,
    Component:App
  },
  {
    path:"app2",
    element:<App></App>
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)

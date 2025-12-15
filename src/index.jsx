import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./Components/About";
import Layout from "./Components/Layout";
// import Navbar from './Components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     children: [
      { index: true, element: <App /> },
      { path: "/about", element: <About /> },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))<|fim_middle|><|fim_middle|>
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

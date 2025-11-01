import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Skills from './pages/Skills.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/contact',
    element: <Contact />,
  }
]);

function App() {

  return <RouterProvider router={router} /> 
}

export default App

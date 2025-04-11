import Home from "./home";
import About from "./about";
import Project from "./projects";
import Contact from "./contact";
import App from "./App";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Project /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
];

export default routes;

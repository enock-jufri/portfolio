import Home from "./home";
import Project from "./projects";
import Contact from "./contact";
import App from "./App";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Project /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
];

export default routes;

import ReactDOM from 'react-dom/client'
import routes from './routes.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'; 
import './index.css'

const router = createHashRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

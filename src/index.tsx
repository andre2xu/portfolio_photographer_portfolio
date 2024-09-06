import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// views
import Home from './views/Home';



const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

const ROOT: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

ROOT.render(
  <RouterProvider router={ROUTER} />
);

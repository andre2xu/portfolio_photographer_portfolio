import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// views
// import Home from './views/Home';
import MyWork from './views/MyWork';
// import AboutMe from './views/AboutMe';
// import Contact from './views/Contact';



const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <MyWork /> // temp
  }
]);

const ROOT: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

ROOT.render(
  <RouterProvider router={ROUTER} />
);

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// views
import Home from './views/Home';
import MyWork from './views/MyWork';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';



const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/mywork',
    element: <MyWork />
  },
  {
    path: '/about',
    element: <AboutMe />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

const ROOT: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

ROOT.render(
  <RouterProvider router={ROUTER} />
);

window.addEventListener('load', () => {
  // disable focus for clicks
  document.body.addEventListener('mousedown', (event: MouseEvent) => {
    if ((event.target instanceof HTMLElement && (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA')) === false) {
      event.preventDefault();
    }
  });
});

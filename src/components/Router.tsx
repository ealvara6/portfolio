import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About/About';
import App from './App/App';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
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
          path: '/resume',
          element: <Resume />,
        },
      ],
    },
    {
      path: '/about',
      element: <About />,
    },
  ]);

  return <RouterProvider router={router} />;
}

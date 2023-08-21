import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ]);

  return <RouterProvider router={router} />;
}

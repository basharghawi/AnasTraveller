import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import About from './ui/About';
import Contact from './ui/contact';
import Tours from './ui/Tours';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <Error />,

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
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/tours',
        element: <Tours />,
      },
      // {
      //   path: '/menu',
      //   element: <Menu />,
      //   loader: menuLoader,
      //   errorElement: <Error />,
      // },
      // { path: '/cart', element: <Cart /> },
      // {
      //   path: '/order/new',
      //   element: <CreateOrder />,
      //   action: createOrderAction,
      // },
      // {
      //   path: '/order/:orderId',
      //   element: <Order />,
      //   loader: orderLoader,
      //   errorElement: <Error />,
      // },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

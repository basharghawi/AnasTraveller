import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';

// Lazy load components
const Home = lazy(() => import('./ui/Home'));
const About = lazy(() => import('./ui/About'));
const Contact = lazy(() => import('./ui/contact'));
const Tours = lazy(() => import('./ui/Tours'));
const TourDetail = lazy(() => import('./ui/TourDetail'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <Error />,

    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/tours',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Tours />
          </Suspense>
        ),
      },
      {
        path: '/tour/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TourDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

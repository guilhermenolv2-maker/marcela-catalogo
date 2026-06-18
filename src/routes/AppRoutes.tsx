import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { ProductDetails } from '../pages/ProductDetails';
import { Products } from '../pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'produtos', element: <Products /> },
      { path: 'produtos/:slug', element: <ProductDetails /> },
      { path: 'contato', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

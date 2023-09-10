import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';

import Home from '~/pages/home';
import Test from '~/pages/test';
import NotFound from '~/pages/notfound';
import Layout from '~/layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/test',
        element: <Test />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];
const router = createBrowserRouter(routes);

const Routes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Routes;

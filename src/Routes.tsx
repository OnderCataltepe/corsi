import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';

import Home from '~/pages/home';
import Board from '~/pages/board';
import Result from '~/pages/result';
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
        path: '/board',
        element: <Board />
      },
      {
        path: '/result',
        element: <Result />
      }
    ]
  }
];
const router = createBrowserRouter(routes);

const Routes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Routes;

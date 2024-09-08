import { RouterProvider } from 'react-router-dom';

import { publicRoutes } from './routes';

const Router = () => <RouterProvider router={publicRoutes} />;

export default Router;

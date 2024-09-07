import NotFoundPage from '@pages/NotFoundPage';
import { ERoutes } from '@shared/model';
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { DefaultScreen } from '../layout/DefaultScreen';

const HomePageLazy = lazy(() => import('../../pages/HomePage'));

export const publicRoutes = createBrowserRouter([
  {
    path: ERoutes.HOME_PAGE,
    element: <DefaultScreen />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ERoutes.HOME_PAGE,
        element: <HomePageLazy />,
      },
    ],
  },
]);

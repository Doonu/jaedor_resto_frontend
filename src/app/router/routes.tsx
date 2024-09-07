import NotFoundPage from '@pages/NotFoundPage';
import { SidebarProvider } from '@shared/hooks';
import { ERoutes } from '@shared/model';
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { RightSidebarScreen } from '../layout/RightSidebarScreen';

const OrdersPageLazy = lazy(() => import('../../pages/OrdersPage'));
const NotificationPageLazy = lazy(() => import('../../pages/NotificationPage'));

export const publicRoutes = createBrowserRouter([
  {
    path: ERoutes.HOME_PAGE,
    element: (
      <SidebarProvider>
        <RightSidebarScreen />
      </SidebarProvider>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ERoutes.HOME_PAGE,
        element: <OrdersPageLazy />,
      },
      { path: ERoutes.NOTIFICATION_PAGE, element: <NotificationPageLazy /> },
    ],
  },
]);

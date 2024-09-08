import NotFoundPage from '@pages/NotFoundPage';
import NotificationPage from '@pages/NotificationPage';
import { ProductsPage } from '@pages/ProductsPage';
import { SidebarProvider } from '@shared/hooks';
import { ERoutes } from '@shared/model';
import { createBrowserRouter } from 'react-router-dom';

import { RightSidebarScreen } from '../layout/RightSidebarScreen';

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
        element: <ProductsPage />,
      },
      { path: ERoutes.NOTIFICATION_PAGE, element: <NotificationPage /> },
    ],
  },
]);

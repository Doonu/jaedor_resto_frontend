import NotFoundNetworkPage from '@pages/NotFoundNetworkPage';
import { useDevice, useNetwork } from '@shared/hooks';
import { SidebarMenu } from '@widgets/SidebarMenu';
import { Outlet } from 'react-router-dom';

import { SContent, SLayout, SWrapper, SContainer } from './defaultScreen.styles';

export const DefaultScreen = () => {
  const { isOldDesktop } = useDevice();

  const isOnline = useNetwork();

  if (!isOnline) return <NotFoundNetworkPage />;

  return (
    <SLayout>
      <SidebarMenu />
      <SWrapper>
        <SContainer>
          <SContent>
            <Outlet />
          </SContent>
        </SContainer>
      </SWrapper>
    </SLayout>
  );
};

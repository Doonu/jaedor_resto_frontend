import NotFoundNetworkPage from '@pages/NotFoundNetworkPage';
import { useNetwork, useSidebarLocation } from '@shared/hooks';
import { SidebarMenu } from '@widgets/SidebarMenu';
import { Outlet } from 'react-router-dom';

import {
  SContent,
  SLayout,
  SWrapper,
  SContainer,
  SRetractableSidebar,
  SRightSidebar,
  SBlurBackground,
} from './rightSidebarScreen.styles';

export const RightSidebarScreen = () => {
  const { info, details, isOpenDetails, fixedWidth } = useSidebarLocation();
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

      <SBlurBackground $isOpen={isOpenDetails} />

      <SRetractableSidebar $widthRetractable={fixedWidth} $isOpen={isOpenDetails}>
        {details || <div>gg</div>}
      </SRetractableSidebar>
      <SRightSidebar width={fixedWidth}>{info}</SRightSidebar>
    </SLayout>
  );
};

import { createContext, FC, PropsWithChildren, ReactNode, useContext, useState } from 'react';

export interface SidebarLocationProps {
  isOpenDetails: boolean;
  onToggleOpenDetails: () => void;
  info: ReactNode | null;
  details: ReactNode | null;
  fixedWidth: number;
  setSidebarProps: (props: Partial<Omit<SidebarLocationProps, 'setSidebarProps'>>) => void;
}

const SidebarContext = createContext<SidebarLocationProps | null>(null);

export const useSidebarLocation = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarProps должен использоваться внутри SidebarProvider');
  }
  return context;
};

export const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [sidebarProps, setSidebarPropsState] = useState<SidebarLocationProps>({
    isOpenDetails: false,
    info: null,
    details: null,
    fixedWidth: 400,
    onToggleOpenDetails: () => {
      setSidebarPropsState((prev) => ({
        ...prev,
        isOpenDetails: !prev.isOpenDetails,
      }));
    },
    setSidebarProps: (newProps) => {
      setSidebarPropsState((prev) => ({
        ...prev,
        ...newProps,
      }));
    },
  });

  return <SidebarContext.Provider value={sidebarProps}>{children}</SidebarContext.Provider>;
};

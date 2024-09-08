import { Input } from 'antd';
import styled from 'styled-components';

export const SNavigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SName = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.core.colorTextPrimary};
`;

export const SDate = styled.div`
  font-size: 16px;
  margin-top: 8px;
  color: ${({ theme }) => theme.core.colorTextSecondary};
`;

export const SInput = styled(Input)``;

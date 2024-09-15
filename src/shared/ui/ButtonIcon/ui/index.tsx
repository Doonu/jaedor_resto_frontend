import { ButtonProps } from 'antd/es/button/button';
import React, { FC } from 'react';

import { SButton } from './buttonIcon.styles';

export const ButtonIcon: FC<ButtonProps> = (args) => <SButton data-testid="ButtonIcon" {...args} />;

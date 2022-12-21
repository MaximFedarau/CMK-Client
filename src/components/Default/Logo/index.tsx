import React, { FC } from 'react';

import { LogoContainer, LogoText } from '@components';
import { SIZES } from '@constants';
import LogoImage from '@assets/images/logo.svg';

export const Logo: FC = () => (
  <LogoContainer>
    <LogoImage width={SIZES['10xl']} height={SIZES['10xl']} />
    <LogoText>CMK</LogoText>
  </LogoContainer>
);

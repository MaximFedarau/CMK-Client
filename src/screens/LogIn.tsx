import React, { FC } from 'react';

import {
  SafeAreaContainer,
  ContentScrollContainer,
  Logo,
  AuthContentContainer,
  AuthWelcomeText,
} from '@components';

export const LogIn: FC = () => (
  <SafeAreaContainer>
    <ContentScrollContainer>
      <Logo />
      <AuthContentContainer>
        <AuthWelcomeText>Log In To Woorkroom</AuthWelcomeText>
      </AuthContentContainer>
    </ContentScrollContainer>
  </SafeAreaContainer>
);

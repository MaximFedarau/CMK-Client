import React, { FC } from 'react';

import {
  ContentScrollContainer,
  Logo,
  FormContentContainer,
  AuthFormButtons,
} from '@components';
import { NavigationAuthName } from '@types';

export const SignUp: FC = () => {
  const onSubmit = () => {
    console.log('onSubmit');
  };

  return (
    <ContentScrollContainer>
      <Logo />
      <FormContentContainer>
        <AuthFormButtons type={NavigationAuthName.SIGN_UP} onSubmit={onSubmit}>
          Next
        </AuthFormButtons>
      </FormContentContainer>
    </ContentScrollContainer>
  );
};

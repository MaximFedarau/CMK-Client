import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  SubmitButton,
  SubmitButtonText,
  AuthFormButtonsContainer,
  AuthFormButtonsTextContainer,
  FormLabel,
  AuthFormButtonsNavigationText,
} from '@components';
import { NavigationAuthName, NavigationProps } from '@types';

interface Props {
  children: string;
  onSubmit: () => void;
  type: NavigationAuthName;
}

const NAVIGATION_INFO: {
  [key in NavigationAuthName]: {
    infoText: string;
    linkText: string;
    link: NavigationAuthName;
  };
} = {
  [NavigationAuthName.LOG_IN]: {
    infoText: 'New User? ',
    linkText: 'Create Account',
    link: NavigationAuthName.SIGN_UP,
  },
  [NavigationAuthName.SIGN_UP]: {
    infoText: 'Have Account? ',
    linkText: 'Log In',
    link: NavigationAuthName.LOG_IN,
  },
};

export const AuthFormButtons: FC<Props> = ({ children, onSubmit, type }) => {
  const { infoText, linkText, link } = NAVIGATION_INFO[type];
  const navigation = useNavigation<NavigationProps>();

  const navigationHandler = () => navigation.replace(link);

  return (
    <AuthFormButtonsContainer>
      <SubmitButton activeOpacity={0.8} onPress={onSubmit}>
        <SubmitButtonText>{children}</SubmitButtonText>
      </SubmitButton>
      <AuthFormButtonsTextContainer>
        <FormLabel>{infoText}</FormLabel>
        <AuthFormButtonsNavigationText onPress={navigationHandler}>
          {linkText}
        </AuthFormButtonsNavigationText>
      </AuthFormButtonsTextContainer>
    </AuthFormButtonsContainer>
  );
};
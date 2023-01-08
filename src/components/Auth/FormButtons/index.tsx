import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  SubmitButton,
  SubmitButtonText,
  FormItemContainer,
  AuthFormButtonsTextContainer,
  FormLabel,
  AuthFormButtonsNavigationButton,
  AuthFormButtonsNavigationText,
} from '@components';
import { COLORS } from '@constants';
import { NavigationAuthName, NavigationProps } from '@types';

type AuthName = NavigationAuthName.LOG_IN | NavigationAuthName.SIGN_UP;

interface Props {
  children: string;
  onSubmit: () => void;
  type: AuthName;
}

const NAVIGATION_INFO: {
  [key in AuthName]: {
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
    <FormItemContainer>
      <SubmitButton activeOpacity={0.8} onPress={onSubmit}>
        <SubmitButtonText>{children}</SubmitButtonText>
      </SubmitButton>
      <AuthFormButtonsTextContainer>
        <FormLabel>{infoText}</FormLabel>
        <AuthFormButtonsNavigationButton
          style={({ pressed }) => pressed && { backgroundColor: COLORS.polar }}
          onPress={navigationHandler}
        >
          <AuthFormButtonsNavigationText>
            {linkText}
          </AuthFormButtonsNavigationText>
        </AuthFormButtonsNavigationButton>
      </AuthFormButtonsTextContainer>
    </FormItemContainer>
  );
};

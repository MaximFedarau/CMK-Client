import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  flex-direction: column;
`;

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const LogoContainer = styled(Container)`
  flex: 0;
  padding-top: ${({ theme }) => theme.sizes['2xl']}px;
`;

export const FormContentContainer = styled(Container)`
  width: 85%;
  justify-content: center;
  align-self: center;
  padding-vertical: ${({ theme }) => theme.sizes['12xl']}px;
`;

export const FormItemContainer = styled(Container)`
  flex: 0;
  margin-top: ${({ theme }) => theme.sizes['7xl']}px;
`;

export const FormFieldInputContainer = styled(Container)`
  height: ${({ theme }) => theme.sizes['11xl']}px;
  flex-direction: row;
  border-bottom-width: ${({ theme }) => theme.sizes.sm / 4}px;
  border-bottom-color: ${({ theme }) => theme.colors.polar};
`;

export const AnimatedFormLabelContainer = styled(Animated.View)`
  position: absolute;
  z-index: 1;
`;

export const AnimatedSecureTextButtonContainer = styled(Animated.View)`
  align-self: center;
  width: ${({ theme }) => theme.sizes['3xl']}px;
  height: ${({ theme }) => theme.sizes['3xl']}px;
  border-radius: ${({ theme }) => theme.sizes['3xl'] / 2}px;
`;

export const AuthFormButtonsTextContainer = styled(Container)`
  flex: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes['3xl']}px;
`;

export const AuthPhoneFieldInputContainer = styled(Container)`
  flex-direction: row;
  height: ${({ theme }) => theme.sizes['11xl']}px;
  margin-top: ${({ theme }) => theme.sizes.lg}px;
`;

export const ModalContentContainer = styled(Container)`
  flex: none;
  width: 85%;
  max-width: ${({ theme }) => theme.sizes['26xl'] * 3}px;
  padding: ${({ theme }) => theme.sizes['2xl']}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.sizes.sm}px;
`;

export const AuthOTPFieldInputContainer = styled(Container)`
  height: ${({ theme }) => theme.sizes['11xl']}px;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.sizes.lg}px;
`;

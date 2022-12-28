import styled from 'styled-components/native';

export const SecureTextButton = styled.Pressable`
  width: ${({ theme }) => theme.sizes['3xl']}px;
  height: ${({ theme }) => theme.sizes['3xl']}px;
  align-self: center;
  padding: ${({ theme }) => theme.sizes.sm / 2}px;
  background-color: ${({ theme }) => theme.colors.polar};
  border-radius: ${({ theme }) => theme.sizes['3xl'] / 2}px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.sizes['12xl']}px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.sizes['2xl']}px;
  justify-content: center;
  align-items: center;
`;

export const AuthCountryCodeButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: ${({ theme }) => theme.sizes['26xl']}px;
  padding: ${({ theme }) => theme.sizes.lg}px;
  border-width: ${({ theme }) => theme.sizes.sm / 4}px;
  border-color: ${({ theme }) => theme.colors.polar};
  border-radius: ${({ theme }) => theme.sizes.lg}px;
`;

export const BackButtonPressable = styled.Pressable`
  width: ${({ theme }) => theme.sizes['2xl']}px;
  height: ${({ theme }) => theme.sizes['2xl']}px;
`;

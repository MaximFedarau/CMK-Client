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

export const AuthCountryCodeDisplayButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: ${({ theme }) => theme.sizes['26xl']}px;
  height: 100%;
  border-width: ${({ theme }) => theme.sizes.sm / 4}px;
  border-color: ${({ theme }) => theme.colors.polar};
  border-radius: ${({ theme }) => theme.sizes.lg}px;
`;

export const BackButtonPressable = styled.Pressable`
  width: ${({ theme }) => theme.sizes['2xl']}px;
  height: ${({ theme }) => theme.sizes['2xl']}px;
`;

export const AuthCountryCodeSelectButton = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.sizes['10xl']}px;
  padding-horizontal: ${({ theme }) => theme.sizes['4xl']}px;
`;

export const ModalContainerButton = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.32);
`;

export const ModalCloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

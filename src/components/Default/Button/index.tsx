import styled, { css } from 'styled-components/native';

export const SecureTextButton = styled.Pressable`
  padding: ${({ theme }) => theme.sizes.sm / 2}px;
  background-color: ${({ theme }) => theme.colors.polar};
  border-radius: ${({ theme }) => theme.sizes['3xl'] / 2}px;
`;

const highlightTextButtonStyles = css`
  border-radius: ${({ theme }) => theme.sizes.sm / 2}px;
  padding-vertical: ${({ theme }) => theme.sizes.sm / 2}px;
  overflow: hidden;
`;

export const AdditionalLabelButton = styled.Pressable`
  ${highlightTextButtonStyles}
  margin-top: ${({ theme }) => theme.sizes.sm}px;
  align-self: flex-end;
`;

export const SubmitButton = styled.Pressable`
  width: 100%;
  height: ${({ theme }) => theme.sizes['12xl']}px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.sizes['2xl']}px;
  justify-content: center;
  align-items: center;
`;

export const AuthFormButtonsNavigationButton = styled.Pressable`
  ${highlightTextButtonStyles}
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

export const ModalCloseButton = styled.Pressable`
  ${highlightTextButtonStyles}
  padding-horizontal: ${({ theme }) => theme.sizes.sm / 2}px;
  align-self: flex-end;
`;

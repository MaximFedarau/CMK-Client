import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';

export const DefaultText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.sizes.base}px;
`;

export const LogoText = styled(DefaultText)`
  margin-top: -${({ theme }) => theme.sizes.sm / 2}px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fonts.sizes.xl}px;
  font-family: ${({ theme }) => theme.fonts.families.primaryMedium};
`;

export const FormHeaderText = styled(DefaultText)`
  text-transform: capitalize;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']}px;
  font-family: ${({ theme }) => theme.fonts.families.primaryMedium};
`;

const formLabelStyles = css`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.families.primaryLight};
  font-size: ${({ theme }) => theme.fonts.sizes.sm}px;
  text-transform: capitalize;
`;

export const FormLabel = styled(DefaultText)`
  ${formLabelStyles}
`;

export const AnimatedFormLabel = styled(Animated.Text)`
  ${formLabelStyles}
`;

export const FormFieldAdditionalLabel = styled(FormLabel)`
  text-align: right;
  text-transform: none;
  margin-top: ${({ theme }) => theme.sizes.md}px;
`;

export const SubmitButtonText = styled(DefaultText)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.families.primary};
`;

export const AuthFormButtonsNavigationText = styled(FormLabel)`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.families.primarySemiBold};
`;

export const AuthCountryCodeDisplayButtonText = styled(DefaultText)`
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.families.primarySemiBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const AuthCountryCodeLocationText = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families.primary};
`;

export const AuthCountryCodeNumberText = styled(DefaultText)`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.families.primaryMedium};
`;

export const ModalTitle = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families.primaryMedium};
  font-size: ${({ theme }) => theme.fonts.sizes.xl}px;
  margin-bottom: ${({ theme }) => theme.sizes.lg}px;
`;

export const ModalContentText = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm}px;
  margin-bottom: ${({ theme }) => theme.sizes['5xl']}px;
`;

export const ModalCloseButtonText = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families.primaryMedium};
  color: ${({ theme }) => theme.colors.blue};
  align-self: center;
`;

export const HighlightedText = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families.primaryMedium};
`;

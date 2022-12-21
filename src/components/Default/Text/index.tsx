import styled from 'styled-components/native';

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

export const AuthWelcomeText = styled(DefaultText)`
  text-transform: capitalize;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']}px;
  font-family: ${({ theme }) => theme.fonts.families.primaryMedium};
`;

export const AuthInputLabel = styled(DefaultText)`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.families.primaryLight};
  font-size: ${({ theme }) => theme.fonts.sizes.sm}px;
  text-transform: capitalize;
`;

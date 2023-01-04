import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const DefaultInput = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

export const FormFieldInput = styled(DefaultInput)`
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.families.primary};
  color: ${({ theme }) => theme.colors.black};
`;

export const AuthPhoneNumberInput = styled(DefaultInput)`
  flex: 1;
  margin-left: ${({ theme }) => theme.sizes.xl}px;
  padding-horizontal: ${({ theme }) => theme.sizes.lg}px;
  border-width: ${({ theme }) => theme.sizes.sm / 4}px;
  border-color: ${({ theme }) => theme.colors.polar};
  border-radius: ${({ theme }) => theme.sizes.lg}px;
  color: ${({ theme, editable }) =>
    editable ? theme.colors.black : theme.colors.gray};
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.families.primary};
`;

export const OTPFieldInput = styled(DefaultInput)<{ focused: boolean }>`
  aspect-ratio: 1;
  height: 100%;
  margin-right: ${({ theme }) => theme.sizes['2xl']}px;
  border-width: ${({ theme }) => theme.sizes.sm / 4}px;
  border-color: ${({ theme, focused }) =>
    focused ? theme.colors.blue : theme.colors.polar};
  border-radius: ${({ theme }) => theme.sizes.md}px;
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.families.primarySemiBold};
`;

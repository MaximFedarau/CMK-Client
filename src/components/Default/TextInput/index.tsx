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

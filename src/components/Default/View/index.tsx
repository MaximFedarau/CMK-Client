import styled from 'styled-components/native';

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

export const FormFieldContainer = styled(Container)`
  flex: 0;
  margin-top: ${({ theme }) => theme.sizes['7xl']}px;
`;

export const FormFieldInputContainer = styled(Container)`
  height: ${({ theme }) => theme.sizes['12xl']}px;
  flex-direction: row;
  border-bottom-width: ${({ theme }) => theme.sizes.sm / 8}px;
  border-bottom-color: ${({ theme }) => theme.colors.polar};
`;

export const AuthFormButtonsContainer = styled(Container)`
  flex: 0;
  margin-top: ${({ theme }) => theme.sizes['7xl']}px;
`;

export const AuthFormButtonsTextContainer = styled(Container)`
  flex: 0;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes['4xl']}px;
`;
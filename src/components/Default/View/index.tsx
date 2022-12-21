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
  padding-top: ${({ theme }) => theme.sizes['3xl']}px;
`;

export const AuthContentContainer = styled(Container)`
  width: 85%;
  justify-content: center;
  align-self: center;
  padding-vertical: ${({ theme }) => theme.sizes['12xl']}px;
`;

export const AuthInputContainer = styled(Container)`
  flex: 0;
  height: ${({ theme }) => theme.sizes['9xl']}px;
  margin-vertical: ${({ theme }) => theme.sizes['4xl']}px;
`;

export const AuthInputContentContainer = styled(Container)`
  flex: none;
  width: 100%;
  height: 100%;
  flex-direction: row;
  border-bottom-width: ${({ theme }) => theme.sizes.sm / 8}px;
  border-bottom-color: ${({ theme }) => theme.colors.polar};
`;

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
  justify-content: center;
  align-self: center;
`;

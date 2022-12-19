import React, { useEffect, FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';

import Navigator from './src';
import { COLORS, THEME } from '@constants';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <NavigationContainer>
        <ThemeProvider theme={THEME}>
          <Navigator />
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

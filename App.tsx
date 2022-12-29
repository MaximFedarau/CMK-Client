import React, { useEffect, FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src';
import { store, persistor } from '@store';
import { COLORS, THEME } from '@constants';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={THEME}>
              <Navigator />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

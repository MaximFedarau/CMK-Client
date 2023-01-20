import React, { FC } from 'react';
import { StatusBar, Platform, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src';
import { store, persistor } from '@store';
import { COLORS, THEME } from '@constants';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
)
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App: FC = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {(bootstrapped) => {
              if (bootstrapped) SplashScreen.hide(); // if redux-persist finished loading, then render app
              return (
                <ThemeProvider theme={THEME}>
                  <Navigator />
                </ThemeProvider>
              );
            }}
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogIn, SignUp, CountryCodeSelection } from '@screens';
import { COLORS } from '@constants';
import { NavigationAuthName } from '@types';

const Stack = createNativeStackNavigator();

export const AuthStack: FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: COLORS.white },
    }}
  >
    <Stack.Screen name={NavigationAuthName.LOG_IN} component={LogIn} />
    <Stack.Screen name={NavigationAuthName.SIGN_UP} component={SignUp} />
    <Stack.Screen
      name={NavigationAuthName.COUNTRY_CODE_SELECTION}
      component={CountryCodeSelection}
      options={{ headerShown: true, title: 'Select a country' }}
    />
  </Stack.Navigator>
);

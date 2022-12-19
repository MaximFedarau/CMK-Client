import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogIn, SignUp } from '@screens';
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
  </Stack.Navigator>
);

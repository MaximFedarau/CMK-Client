import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStack } from '@navigation';
import { NavigationName } from '@types';

const Stack = createNativeStackNavigator();

const Navigator: FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={NavigationName.AUTH} component={AuthStack} />
  </Stack.Navigator>
);

export default Navigator;

// src/navigation/RootStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../HomePage';
import Finanais from '../finanças';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Finanças" component={Finanais} />
    </Stack.Navigator>
  );
}

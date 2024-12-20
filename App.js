import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';

import HomePage from './src/HomePage';
import Financias from './src/finanças'




export default function App() {
  return (
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

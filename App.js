import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Header from './src/components/layout/Header';
import RecipesContainer from './src/components/containers/RecipesContainer';
import AppStack from './src/components/stacks/AppStack';

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <Header />
      <RecipesContainer /> */}
      <AppStack />
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
}

export default App

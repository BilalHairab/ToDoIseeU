/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PostsMainScreen from './src/ui/screens/PostsMainScreen';
import PostDetailScreen from './src/ui/screens/PostDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Posts" component={PostsMainScreen} />
        <Stack.Screen name="Post" component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

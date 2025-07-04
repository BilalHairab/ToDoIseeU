/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import PostsMainScreen from './src/ui/screens/posts/PostsMainScreen';
import PostDetailScreen from './src/ui/screens/post_detail/PostDetailScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Posts: undefined;
  Post: { postId: number };
};
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Posts'>;

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="Posts" component={PostsMainScreen} />
          <Stack.Screen name="Post" component={PostDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

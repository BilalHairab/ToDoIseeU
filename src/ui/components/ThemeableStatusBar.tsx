import { StatusBar, useColorScheme } from 'react-native';

export default function ThemeableStatusBar() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  );
}

import { ColorSchemeName } from 'react-native';

export const lightColors = {
  background: '#f9f9f9',
  surface: '#fff',
  surfaceAlt: '#fafafa',
  border: '#ddd',
  borderAlt: '#eee',
  textPrimary: '#333',
  textSecondary: '#555',
  textTertiary: '#444',
};

export const darkColors = {
  background: '#121212',
  surface: '#1e1e1e',
  surfaceAlt: '#2c2c2c',
  border: '#333',
  borderAlt: '#444',
  textPrimary: '#eee',
  textSecondary: '#bbb',
  textTertiary: '#888',
};

export const getColors = (scheme: ColorSchemeName) =>
  scheme === 'dark' ? darkColors : lightColors;

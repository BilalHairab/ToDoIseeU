import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
  },
  centerElement: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorElementTextStyle: { color: 'red' },
  infoBox: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
  },
});

export default commonStyles;

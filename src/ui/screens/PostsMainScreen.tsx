import { StatusBar, useColorScheme, View } from 'react-native';
import commonStyles from '../common/styles';

function PostsMainScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={commonStyles.mainScreenContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </View>
  );
}

export default PostsMainScreen;

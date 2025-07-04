import {
  useColorScheme,
  View
} from 'react-native';
import commonStyles from '../../common/styles';
import PostsBody from './PostsBody';
import ThemeableStatusBar from '../../components/ThemeableStatusBar';
import { getColors } from '../../theme/colors';

function PostsMainScreen() {
  const scheme = useColorScheme();
  const colors = getColors(scheme);

  return (
    <View style={[commonStyles.mainScreenContainer, {backgroundColor: colors.surface}]}>
      <ThemeableStatusBar />
      <PostsBody />
    </View>
  );
}

export default PostsMainScreen;

import {
  View
} from 'react-native';
import commonStyles from '../../common/styles';
import PostsBody from './PostsBody';
import ThemeableStatusBar from '../../components/ThemeableStatusBar';

function PostsMainScreen() {

  return (
    <View style={commonStyles.mainScreenContainer}>
      <ThemeableStatusBar />
      <PostsBody />
    </View>
  );
}

export default PostsMainScreen;

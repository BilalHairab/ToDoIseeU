import { StatusBar, useColorScheme, View } from 'react-native';
import commonStyles from '../../common/styles';

function PostDetailScreen() {
//   const [post, setPost] = useState<Post | undefined>(undefined);
//   const [user, setUser] = useState<User | undefined>(undefined);
//   const [error, setError] = useState(undefined);

//   useEffect(() => {
//     getPostsFromAPI()
//       .then(ps => {
//         setPosts(ps);
//       })
//       .catch(e => {
//         setError(e);
//       });
//   }, []);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={commonStyles.mainScreenContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </View>
  );
}

export default PostDetailScreen;

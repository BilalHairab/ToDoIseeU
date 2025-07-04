import { ScrollView, StyleSheet, Text, View } from 'react-native';
import commonStyles from '../../common/styles';
import { usePostDetails } from '../../hooks/usePostDetails';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';
import ErrorElement from '../../components/ErrorElement';
import LoadingElement from '../../components/LoadingElement';
import ThemeableStatusBar from '../../components/ThemeableStatusBar';
import { useEffect } from 'react';
import { WebView } from 'react-native-webview';

type PostScreenRouteProp = RouteProp<RootStackParamList, 'Post'>;

function PostDetailScreen() {
  const route = useRoute<PostScreenRouteProp>();
  const { postId } = route.params;
  const { state, retry } = usePostDetails(postId);
  const navigation = useNavigation();

  useEffect(() => {
    if (state.status === 'success') {
      navigation.setOptions({ title: `${state.data.user.username}'s Post` });
    } else {
      navigation.setOptions({ title: `Loading Post` });
    }
  }, [state, navigation]);

  if (state.status === 'init' || state.status === 'loading') {
    return <LoadingElement />;
  }

  if (state.status === 'error') {
    return <ErrorElement error={state.error} onRetry={retry} />;
  }
  const latitude = state.data.user.address.geo.lat;
  const longitude = state.data.user.address.geo.lng;
  const mapHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>body, html { margin: 0; padding: 0; height: 100%; }</style>
    </head>
    <body>
      <iframe
        width="100%"
        height="100%"
        frameborder="0" style="border:0"
        src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed"
        allowfullscreen>
      </iframe>
    </body>
  </html>
`;

  return (
    <View style={commonStyles.mainScreenContainer}>
      <ThemeableStatusBar />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Post Card */}
        <View style={styles.card}>
          <Text style={styles.title}>{state.data.post.title}</Text>
          <Text style={styles.body}>{state.data.post.body}</Text>
        </View>

        <Text style={styles.sectionTitle}>Author Info</Text>
        <View style={commonStyles.infoBox}>
          <Text style={styles.info}>
            <Text style={styles.label}>Name:</Text> {state.data.user.name}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Username:</Text>{' '}
            {state.data.user.username}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Email:</Text> {state.data.user.email}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Phone:</Text> {state.data.user.phone}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Website:</Text> {state.data.user.website}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Company</Text>
        <View style={commonStyles.infoBox}>
          <Text style={styles.info}>
            <Text style={styles.label}>Name:</Text>{' '}
            {state.data.user.company.name}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>Catchphrase:</Text>{' '}
            {state.data.user.company.catchPhrase}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Address</Text>
        <View style={commonStyles.infoBox}>
          <Text style={styles.info}>
            {state.data.user.address.street}, {state.data.user.address.suite}
          </Text>
          <Text style={styles.info}>
            {state.data.user.address.city} {state.data.user.address.zipcode}
          </Text>
          <View
            style={{
              height: 200,
              borderRadius: 10,
              overflow: 'hidden',
              marginTop: 10,
            }}
          >
            <WebView
              originWhitelist={['*']}
              source={{ html: mapHtml }}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  body: {
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 12,
    color: '#444',
  },
  info: {
    fontSize: 15,
    marginBottom: 6,
    color: '#333',
  },
  label: {
    fontWeight: '600',
  },
});

export default PostDetailScreen;

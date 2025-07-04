import { FlatList, RefreshControl } from 'react-native';
import React from 'react';
import { usePosts } from '../../hooks/usePosts';
import PostItem from '../../components/PostItem';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../../../App';
import LoadingElement from '../../components/LoadingElement';
import EmptyPostsElement from '../../components/EmptyPostsElement';
import ErrorElement from '../../components/ErrorElement';

function PostsBody() {
  const { state, retry } = usePosts();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  if (state.status === 'init') {
    return <LoadingElement />;
  }

  if (state.status === 'error') {
    return <ErrorElement error={state.error} onRetry={retry} />;
  }

  return (
    <FlatList
      data={state.status === 'success' ? state.data : []}
      keyExtractor={(item, _) => item.id.toString()}
      renderItem={({ item }) => (
        <PostItem
          post={item}
          onPostClick={() => {
            navigation.navigate('Post', { postId: item.id });
            console.log(`post clicked ${item.id}`);
          }}
        />
      )}
      refreshControl={
        <RefreshControl
          refreshing={state.status === 'loading'}
          onRefresh={retry}
        />
      }
      ListEmptyComponent={
        state.status === 'loading' ? <LoadingElement /> : <EmptyPostsElement />
      }
    />
  );
}

export default PostsBody;

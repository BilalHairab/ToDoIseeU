// import { useEffect, useState } from 'react';
// import { Post, User } from '../../data/models';
// import { getPostsFromAPI } from '../../data/api';
import { StatusBar, useColorScheme, View } from 'react-native';
import commonStyles from '../common/styles';

function PostDetailScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={commonStyles.mainScreenContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </View>
  );
}

export default PostDetailScreen;

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Post } from '../../data/models';
import commonStyles from '../common/styles';

type Props = {
  post: Post;
  onPostClick: () => void;
};

export default function PostItem({ post, onPostClick }: Props) {
  return (
    <TouchableOpacity onPress={onPostClick} style={{ paddingHorizontal: 10 }}>
      <View style={[commonStyles.infoBox]}>
        <Text style={{ fontWeight: 'bold' }}>{post.title}</Text>
        <Text>{post.body}</Text>
      </View>
    </TouchableOpacity>
  );
}

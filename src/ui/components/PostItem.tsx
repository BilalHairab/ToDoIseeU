import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Post } from '../../data/models';

type Props = {
  post: Post;
  onPostClick: () => void;
};

export default function PostItem({ post, onPostClick }: Props) {
  return (
    <TouchableOpacity onPress={onPostClick}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontWeight: 'bold' }}>{post.title}</Text>
        <Text>{post.body}</Text>
      </View>
    </TouchableOpacity>
  );
}

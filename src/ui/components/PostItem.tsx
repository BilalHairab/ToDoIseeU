import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import React from 'react';
import { Post } from '../../data/models';
import commonStyles from '../common/styles';
import { getColors } from '../theme/colors';

type Props = {
  post: Post;
  onPostClick: () => void;
};

export default function PostItem({ post, onPostClick }: Props) {
  const scheme = useColorScheme();
  const colors = getColors(scheme);

  return (
    <TouchableOpacity onPress={onPostClick} style={{ paddingHorizontal: 10 }}>
      <View
        style={[
          commonStyles.infoBox,
          { backgroundColor: colors.surfaceAlt, borderColor: colors.border },
        ]}
      >
        <Text style={{ fontWeight: 'bold', color: colors.textPrimary }}>
          {post.title}
        </Text>
        <Text style={{ color: colors.textSecondary }}>{post.body}</Text>
      </View>
    </TouchableOpacity>
  );
}

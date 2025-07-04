import { View, Text, Button } from 'react-native';
import commonStyles from '../common/styles';
import React from 'react';

type Props = {
  error: string;
  onRetry: () => void;
};

export default function ErrorElement(props: Props) {
  return (
    <View style={commonStyles.centerElement}>
      <Text style={commonStyles.errorElementTextStyle}>{props.error}</Text>
      <Button title="Retry" onPress={props.onRetry} />
    </View>
  );
}

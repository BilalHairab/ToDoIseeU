import { View, ActivityIndicator, Text } from "react-native";
import commonStyles from "../common/styles";
import React from "react";

export default function LoadingElement() {
  return (
    <View style={commonStyles.centerElement}>
      <ActivityIndicator size="large" />
      <Text style={commonStyles.errorElementTextStyle}>
        {'Loading Posts...'}
      </Text>
    </View>
  );
}

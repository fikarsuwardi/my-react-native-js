import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen() {

  function HelloWorld(props) {
    return (
      <Text>Test {props.name} {props.place}</Text>
    )
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HelloWorld name="res" place="ss"></HelloWorld>
      <Text>Details Screen</Text>
    </View>
  );
}

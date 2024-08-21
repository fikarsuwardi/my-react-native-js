import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  var increament = () => {
    setCount(count + 1);
  };

  function resetCount() {
    setCount(0);
  }

  return (
    // <ScrollView>
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={{ height: 10 }}></View>
      <Text>Count {count}</Text>
      <View style={{ height: 10 }}></View>
      <Button title="Increament" onPress={increament} />
      <View style={{ height: 10 }}></View>
      <Button title="Reset" onPress={resetCount} />
      <View style={{ height: 10 }}></View>
      <Text>This is text input</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: "gray",
          borderWidth: 3,
        }}
        placehol
        der="Type here to translate!"
      />
      <View style={{ height: 10 }} />
      <Text>Pizza Transalator</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 3,
          width: 200,
          padding: 10,
        }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
      <View style={{ height: 10 }} />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <View style={{ height: 10 }} />
      <Button title="Go to Todo" onPress={() => navigation.navigate("Todo")} />
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

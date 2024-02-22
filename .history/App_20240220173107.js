import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export default function App() {
  console.log("app executed");

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          console.log("pressed");
        }}
      >
        Open up App.js to start working!
      </Text>
      <Image fadeDuration={1000} blurRadius={3} source={{ width: 200, height: 200, uri: "https://i.stack.imgur.com/cYDj5.png" }} />
      <Button
        color="pink"
        title="Click"
        onPress={() => {
          Alert.alert("Alert pressed", "?Si y no?", [{ text: "Yes" }, { text: "No" }]);
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

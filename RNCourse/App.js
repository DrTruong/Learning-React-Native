import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another peace of text!</Text>
      </View>
      <Text style={styles.dummyText}>HelloWorld!!!</Text>
      <Button title="Tap me !!!" />
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
  dummyText: {
    margin: 16,
    padding: 10,
    borderWidth: 2,
    borderColor: "red",
  },
});

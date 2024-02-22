import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Khóa học mục tiêu của bạn !"></TextInput>
        <Button title="Thêm mục tiêu" />
      </View>
      <View>
        <Text>Danh sách các mục tiêu...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});

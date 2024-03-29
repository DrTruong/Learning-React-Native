import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    // sử dụng hàm bind() để có thể trỏ đến GoalItem component này, và cho hàm onDeleteItem có thể sử dụng được các tham số ddos
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItems}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

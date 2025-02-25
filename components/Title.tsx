import { StyleSheet, Text } from "react-native";

export default function Title() {
  return <Text style={styles.title}>Convert Currency</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 25,
  },
});

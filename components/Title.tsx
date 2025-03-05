import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convert Currency</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 25,
    alignItems: "center",
  },
  title: {
    fontFamily: FontFamily.title,
    fontSize: FontSize.title,
    color: Color.title,
  },
});

import { StyleSheet, View } from "react-native";

import SourceCurrency from "./SourceCurrency";
import SourceAmount from "./SourceAmount";
import { Color } from "../constants/Color";

export default function Body() {
  return (
    <View style={styles.container}>
      <SourceAmount />
      <SourceCurrency />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.bodyBackground,
    paddingVertical: 30,
    paddingHorizontal: 15,
    gap: 30,
    borderRadius: 7,
  },
});

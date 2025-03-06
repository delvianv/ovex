import { StyleSheet, View } from "react-native";

import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";
import { Color } from "../constants/Color";

export default function Body() {
  return (
    <View style={styles.container}>
      <InputContainer />
      <OutputContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.bodyBackground,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 7,
    gap: 42,
  },
});

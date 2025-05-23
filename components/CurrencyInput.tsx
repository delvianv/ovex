import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import InputLabel from "./InputLabel";

export default function CurrencyInput() {
  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE CURRENCY" />
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Select a source currency</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={fontSize.inputText}
          color={colors.inputText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
    elevation: 1,
    borderRadius: 4,
    backgroundColor: colors.bodyBackground,
  },
  inputText: {
    flex: 1,
    fontFamily: fontFamily.inputLabel,
    fontSize: fontSize.inputLabel,
    color: colors.inputLabel,
  },
});

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import InputContainer from "./InputContainer";
import InputLabel from "./InputLabel";

export default function CurrencyInput() {
  return (
    <View style={styles.container}>
      <InputLabel text="SOURCE CURRENCY" />
      <InputContainer>
        <Text style={styles.inputText}>Select a source currency</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={fontSize.inputText}
          color={colors.inputText}
        />
      </InputContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  inputText: {
    flex: 1,
    fontFamily: fontFamily.inputLabel,
    fontSize: fontSize.inputLabel,
    color: colors.inputLabel,
  },
});

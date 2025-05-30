import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import InputContainer from "@/containers/InputContainer";
import InputLabel from "./InputLabel";

interface InputProps {
  label: string;
  placeholder: string;
}

export default function CurrencyInput({ label, placeholder }: InputProps) {
  return (
    <View style={styles.container}>
      <InputLabel text={label} />
      <InputContainer>
        <Text style={styles.inputText}>{placeholder}</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={fontSize.text}
          color={colors.text}
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
    fontFamily: fontFamily.regular,
    fontSize: fontSize.label,
    color: colors.label,
  },
});

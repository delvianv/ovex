import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={16} color={colors.text} />
      <TextInput
        inputMode="search"
        placeholder="Search"
        placeholderTextColor={colors.label}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.inputBackground,
    borderColor: colors.label,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    gap: 4,
  },
  input: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.label,
    color: colors.text,
  },
});

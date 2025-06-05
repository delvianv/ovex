import { colors } from "@/constants/Colors";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function InputContainer({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.inputBackground,
    borderColor: colors.inputBorder,
    elevation: 1,
    height: 56,
    paddingHorizontal: 16,
  },
});

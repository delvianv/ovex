import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";

export default function InputContainer({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
    elevation: 1,
    borderRadius: 4,
    backgroundColor: colors.bodyBackground,
  },
});

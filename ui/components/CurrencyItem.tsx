import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontSize } from "@/constants/Fonts";
import CurrencyLabel from "./CurrencyLabel";

interface ItemProps {
  currencyID: string;
}

export default function CurrencyItem({ currencyID }: ItemProps) {
  return (
    <Pressable>
      <View style={styles.container}>
        <CurrencyLabel currencyID={currencyID} />
        <MaterialIcons
          name="keyboard-arrow-right"
          size={fontSize.icon}
          color={colors.text}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 4,
    marginBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
});

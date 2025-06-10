import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { CurrencyType } from "@/lib/types";
import Currency from "./Currency";

interface ItemProps {
  currency: CurrencyType;
}

export default function CurrencyItem({ currency }: ItemProps) {
  return (
    <View style={styles.container}>
      <Currency currency={currency} />
      <MaterialIcons
        name="keyboard-arrow-right"
        size={16}
        color={colors.text}
      />
    </View>
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

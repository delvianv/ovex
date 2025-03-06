import { StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import CurrencyName from "./CurrencyName";
import { Color } from "../constants/Color";

interface ItemProps {
  id: string;
}

export default function CurrencyItem({ id }: ItemProps) {
  return (
    <View style={styles.container}>
      <CurrencyName id={id} />
      <MaterialIcons
        name="keyboard-arrow-right"
        size={15}
        color={Color.modalCurrencyIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Color.inputBackground,
    marginBottom: 5,
    height: 34,
    alignItems: "center",
    paddingHorizontal: 7,
    borderRadius: 5,
  },
});

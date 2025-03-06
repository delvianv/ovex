import { Pressable, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import CurrencyName from "./CurrencyName";
import { Color } from "../constants/Color";

interface ItemProps {
  id: string;
  onPress: (id: string) => void;
}

export default function CurrencyItem({ id, onPress }: ItemProps) {
  return (
    <Pressable onPress={() => onPress(id)}>
      <View style={styles.container}>
        <CurrencyName id={id} style="modal" />
        <MaterialIcons
          name="keyboard-arrow-right"
          size={15}
          color={Color.modalCurrencyIcon}
        />
      </View>
    </Pressable>
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

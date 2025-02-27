import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";

interface NameProps {
  id: string;
  name: string;
}

export default function CurrencyName({ id, name }: NameProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 8,
    gap: 8,
    alignItems: "baseline",
    flex: 1,
  },
  id: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.default,
    color: Color.currencyID,
    textTransform: "uppercase",
  },
  name: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.small,
    color: Color.currencyName,
  },
});

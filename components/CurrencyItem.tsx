import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import CurrencyName from "./CurrencyName";
import { Color } from "../constants/Color";

interface CurrencyProps {
  item: any;
}

export default function CurrencyItem({ item }: CurrencyProps) {
  return (
    <View style={styles.container}>
      <Image source={item.icon_url} style={styles.icon} />
      <CurrencyName id={item.id} name={item.name} />
      <Image
        source={require("../assets/icons/arrow-right.svg")}
        style={styles.arrow}
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
    paddingHorizontal: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  arrow: {
    width: 15,
    height: 15,
  },
});

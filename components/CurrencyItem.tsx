import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";

import CurrencyName from "./CurrencyName";
import { Color } from "../constants/Color";
import { Currency } from "../App";

interface ItemProps {
  item: Currency;
  handleSelectCurrency: (currency: Currency) => void;
}

export default function CurrencyItem({
  item,
  handleSelectCurrency,
}: ItemProps) {
  return (
    <Pressable onPress={() => handleSelectCurrency(item)}>
      <View style={styles.container}>
        <CurrencyName
          id={item.id}
          name={item.name}
          icon={item.icon_url}
          style="modal"
        />
        <Image
          source={require("../assets/icons/arrow-right.svg")}
          style={styles.arrow}
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
    paddingHorizontal: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  arrow: {
    width: 15,
    height: 15,
  },
});

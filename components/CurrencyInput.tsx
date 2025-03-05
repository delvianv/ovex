import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import SelectCurrency from "./SelectCurrency";
import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

export default function CurrencyInput() {
  const [selectCurrency, setSelectCurrency] = useState(false);

  const showSelectCurrency = () => setSelectCurrency(true);
  const hideSelectCurrency = () => setSelectCurrency(false);

  return (
    <>
      <Pressable onPress={showSelectCurrency}>
        <View style={styles.container}>
          <Text style={styles.currencyInput}>Select a Source Currency</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={Color.appCurrencyIcon}
          />
        </View>
      </Pressable>
      <SelectCurrency visible={selectCurrency} hide={hideSelectCurrency} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Color.inputBackground,
    height: 44,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 1,
  },
  currencyInput: {
    flex: 1,
    fontFamily: FontFamily.currencyInput,
    fontSize: FontSize.currencyInput,
    color: Color.currencyInput,
  },
});

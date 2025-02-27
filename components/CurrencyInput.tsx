import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import CurrencyName from "./CurrencyName";
import InputLabel from "./InputLabel";
import SelectCurrency from "./SelectCurrency";
import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";
import { Currency } from "../App";

interface InputProps {
  label: string;
  text: string;
  currency: Currency | undefined;
  setCurrency: (currency: Currency) => void;
}

export default function CurrencyInput({
  label,
  text,
  currency,
  setCurrency,
}: InputProps) {
  const [selectCurrencyVisible, setSelectCurrencyVisible] = useState(false);

  return (
    <View style={styles.container}>
      <InputLabel text={label} />
      <Pressable onPress={() => setSelectCurrencyVisible(true)}>
        <View style={styles.inputContainer}>
          {currency ? (
            <CurrencyName
              id={currency.id}
              name={currency.name}
              icon={currency.icon_url}
              style="main"
            />
          ) : (
            <Text style={styles.input}>{text}</Text>
          )}
          <Image
            source={require("../assets/icons/arrow-down.svg")}
            style={styles.icon}
          />
        </View>
      </Pressable>
      <SelectCurrency
        visible={selectCurrencyVisible}
        setVisible={setSelectCurrencyVisible}
        setCurrency={setCurrency}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  inputContainer: {
    backgroundColor: Color.inputBackground,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    elevation: 1,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.default,
    color: Color.currencyText,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

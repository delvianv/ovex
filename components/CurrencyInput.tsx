import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import InputLabel from "./InputLabel";
import SelectCurrency from "./SelectCurrency";
import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";

interface InputProps {
  text: string;
}

export default function CurrencyInput({ text }: InputProps) {
  const [selectCurrencyVisible, setSelectCurrencyVisible] = useState(false);

  return (
    <View style={styles.container}>
      <InputLabel text={text} />
      <Pressable onPress={() => setSelectCurrencyVisible(true)}>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>Select a Source Currency</Text>
          <Image
            source={require("../assets/icons/arrow-down.svg")}
            style={styles.icon}
          />
        </View>
      </Pressable>
      <SelectCurrency
        visible={selectCurrencyVisible}
        setVisible={setSelectCurrencyVisible}
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

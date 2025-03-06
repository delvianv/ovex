import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import SelectCurrency from "./SelectCurrency";
import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { CurrenciesProvider } from "../contexts/CurrenciesContext";
import { TabProvider } from "../contexts/TabContext";

interface InputProps {
  label: string;
}

export default function CurrencyInput({ label }: InputProps) {
  const [selectCurrency, setSelectCurrency] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(label.includes("SOURCE") ? "Source" : "Destination");
  }, [label]);

  const showSelectCurrency = () => setSelectCurrency(true);
  const hideSelectCurrency = () => setSelectCurrency(false);

  return (
    <>
      <Pressable onPress={showSelectCurrency}>
        <View style={styles.container}>
          <Text style={styles.currencyInput}>
            {`Select a ${text} Currency`}
          </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={Color.appCurrencyIcon}
          />
        </View>
      </Pressable>
      <CurrenciesProvider>
        <TabProvider>
          <SelectCurrency visible={selectCurrency} hide={hideSelectCurrency} />
        </TabProvider>
      </CurrenciesProvider>
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

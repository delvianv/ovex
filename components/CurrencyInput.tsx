import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import InputLabel from "./InputLabel";
import SelectCurrency from "./SelectCurrency";
import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { CurrencyProvider } from "../contexts/CurrencyContext";
import { SearchProvider } from "../contexts/SearchContext";
import { TabProvider } from "../contexts/TabContext";

interface InputProps {
  label: string;
}

export default function CurrencyInput({ label }: InputProps) {
  const [selectCurrency, setSelectCurrency] = useState(false);

  const showSelectCurrency = () => setSelectCurrency(true);
  const hideSelectCurrency = () => setSelectCurrency(false);

  return (
    <View style={{ gap: 8 }}>
      <InputLabel text={label} />
      <Pressable onPress={showSelectCurrency}>
        <View style={styles.container}>
          <Text style={styles.currencyInput}>
            {label.includes("SOURCE")
              ? "Select a Source Currency"
              : "Select a Destination Currency"}
          </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={Color.appCurrencyIcon}
          />
        </View>
      </Pressable>
      <CurrencyProvider>
        <TabProvider>
          <SearchProvider>
            <SelectCurrency
              visible={selectCurrency}
              hide={hideSelectCurrency}
            />
          </SearchProvider>
        </TabProvider>
      </CurrencyProvider>
    </View>
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

import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import CurrencyName from "./CurrencyName";
import InputLabel from "./InputLabel";
import SelectCurrency from "./SelectCurrency";
import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { SearchProvider } from "../contexts/SearchContext";
import { TabProvider } from "../contexts/TabContext";

import {
  SourceCurrency,
  DestinationCurrency,
} from "../contexts/CurrencyContext";

interface InputProps {
  label: string;
}

export default function CurrencyInput({ label }: InputProps) {
  const [source, setSource] = useState(label.includes("SOURCE"));
  const currency = useContext(source ? SourceCurrency : DestinationCurrency);

  const [selectCurrency, setSelectCurrency] = useState(false);
  const showSelectCurrency = () => setSelectCurrency(true);
  const hideSelectCurrency = () => setSelectCurrency(false);

  return (
    <View style={{ gap: 8 }}>
      <InputLabel text={label} />
      <Pressable onPress={showSelectCurrency}>
        <View style={styles.container}>
          {currency ? (
            <CurrencyName id={currency} style="home" />
          ) : (
            <Text style={styles.currencyInput}>
              {`Select a ${source ? "Source" : "Destination"} Currency`}
            </Text>
          )}
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={Color.homeCurrencyIcon}
          />
        </View>
      </Pressable>
      <TabProvider>
        <SearchProvider>
          <SelectCurrency
            visible={selectCurrency}
            hide={hideSelectCurrency}
            label={label}
          />
        </SearchProvider>
      </TabProvider>
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

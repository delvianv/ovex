import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fetchCurrencies } from "@/lib/API";
import { SetCurrencyContext } from "@/lib/CurrencyProvider";
import AmountInput from "../components/AmountInput";
import CurrencyInputContainer from "./CurrencyInputContainer";
import OutputContainer from "./OutputContainer";

export default function Body() {
  const setCurrency = useContext(SetCurrencyContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCurrencies();
      setCurrency(data);
    };

    fetchData();
  }, [setCurrency]);

  return (
    <View style={styles.container}>
      <AmountInput />
      <CurrencyInputContainer />
      <OutputContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bodyBackground,
    marginTop: 24,
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 40,
    flex: 1,
  },
});

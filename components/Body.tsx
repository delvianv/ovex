import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";
import { Color } from "../constants/Color";
import { AmountProvider } from "../contexts/AmountContext";
import { DestinationCurrency } from "../contexts/CurrencyContext";
import { MarketProvider } from "../contexts/MarketContext";

export default function Body() {
  const destinationCurrency = useContext(DestinationCurrency);

  return (
    <View style={styles.container}>
      <AmountProvider>
        <MarketProvider>
          <InputContainer />
          {destinationCurrency && <OutputContainer />}
        </MarketProvider>
      </AmountProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.bodyBackground,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 7,
    gap: 42,
  },
});

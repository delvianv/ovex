import { StyleSheet, View } from "react-native";

import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";
import { Color } from "../constants/Color";
import { AmountProvider } from "../contexts/AmountContext";
import { CurrencyProvider } from "../contexts/CurrencyContext";

export default function Body() {
  return (
    <View style={styles.container}>
      <CurrencyProvider>
        <AmountProvider>
          <InputContainer />
          <OutputContainer />
        </AmountProvider>
      </CurrencyProvider>
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

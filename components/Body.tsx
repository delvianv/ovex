import { StyleSheet, View } from "react-native";

import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";
import { Color } from "../constants/Color";
import { CurrencyProvider } from "../contexts/CurrencyContext";

export default function Body() {
  return (
    <View style={styles.container}>
      <CurrencyProvider>
        <InputContainer />
        <OutputContainer />
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

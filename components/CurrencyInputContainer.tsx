import { StyleSheet, View } from "react-native";

import CurrencyInput from "./CurrencyInput";
import InputLabel from "./InputLabel";

interface ContainerProps {
  label: string;
}

export default function CurrencyInputContainer({ label }: ContainerProps) {
  return (
    <View style={styles.container}>
      <InputLabel text={label} />
      <CurrencyInput label={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});

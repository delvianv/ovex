import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import InputLabel from "./InputLabel";

interface InputProps {
  text: string;
}

export default function CurrencyInput({ text }: InputProps) {
  return (
    <View style={styles.container}>
      <InputLabel text={text} />
      <View style={styles.inputContainer}>
        <Text style={styles.input}>Select a Source Currency</Text>
        <Image
          source={require("../assets/icons/arrow.svg")}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  inputContainer: {
    backgroundColor: "#FFF",
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
    fontSize: 16,
    color: "#8E8D99",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

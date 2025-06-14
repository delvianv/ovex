import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontSize } from "@/constants/Fonts";
import CurrencyModal from "../containers/CurrencyModal";
import InputContainer from "../containers/InputContainer";
import CurrencyLabel from "./CurrencyLabel";
import InputLabel from "./InputLabel";

interface InputProps {
  label: string;
  currencyID: string;
  markets: string[];
  setCurrency: (currencyID: string) => void;
}

export default function CurrencyInput({
  label,
  currencyID,
  markets,
  setCurrency,
}: InputProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <InputLabel text={label} />
      <Pressable onPress={() => setModalVisible(true)}>
        <InputContainer>
          <CurrencyLabel currencyID={currencyID} />
          <MaterialIcons
            name="keyboard-arrow-down"
            size={fontSize.text}
            color={colors.text}
          />
        </InputContainer>
      </Pressable>
      <CurrencyModal
        visible={modalVisible}
        close={() => setModalVisible(false)}
        markets={markets}
        setCurrency={setCurrency}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});

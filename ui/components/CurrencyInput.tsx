import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontSize } from "@/constants/Fonts";
import Currency from "../components/Currency";
import CurrencyModal from "../containers/CurrencyModal";
import InputContainer from "../containers/InputContainer";
import InputLabel from "./InputLabel";

interface InputProps {
  label: string;
  currencyID: string;
}

export default function CurrencyInput({ label, currencyID }: InputProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <InputLabel text={label} />
      <Pressable onPress={() => setModalVisible(true)}>
        <InputContainer>
          <Currency currencyID={currencyID} />
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});

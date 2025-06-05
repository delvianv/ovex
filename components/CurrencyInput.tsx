import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import CurrencyModal from "@/containers/CurrencyModal";
import InputContainer from "@/containers/InputContainer";
import InputLabel from "./InputLabel";

interface InputProps {
  label: string;
  placeholder: string;
}

export default function CurrencyInput({ label, placeholder }: InputProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <InputLabel text={label} />
      <Pressable onPress={() => setModalVisible(true)}>
        <InputContainer>
          <Text style={styles.inputText}>{placeholder}</Text>
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
  inputText: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.label,
    color: colors.label,
  },
});

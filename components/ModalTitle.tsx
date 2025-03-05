import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

export default function ModalTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.modalTitle}>Select Currency</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  modalTitle: {
    fontFamily: FontFamily.modalTitle,
    fontSize: FontSize.modalTitle,
    color: Color.modalTitle,
  },
});

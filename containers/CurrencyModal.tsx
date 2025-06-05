import { Modal, StyleSheet, Text, View } from "react-native";

import CloseButton from "@/components/CloseButton";
import SearchInput from "@/components/SearchInput";
import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import TabContainer from "./TabContainer";

interface ModalProps {
  visible: boolean;
  close: () => void;
}

export default function CurrencyModal({ visible, close }: ModalProps) {
  return (
    <Modal visible={visible} onRequestClose={close} transparent={true}>
      <View style={styles.container}>
        <CloseButton onPress={close} />
        <Text style={styles.title}>Select Currency</Text>
        <TabContainer />
        <SearchInput />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
    padding: 16,
    backgroundColor: colors.bodyBackground,
    gap: 8,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.modalTitle,
    color: colors.text,
    textAlign: "center",
  },
});

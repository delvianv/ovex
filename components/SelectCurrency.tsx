import { Image } from "expo-image";
import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";

import CloseButton from "./CloseButton";
import SearchInput from "./SearchInput";
import TabContainer from "./TabContainer";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/FontSize";

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export default function SelectCurrency({ visible, setVisible }: ModalProps) {
  const [activeTab, setActiveTab] = useState("Crypto");

  const hide = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={hide}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.container}>
        <CloseButton hideModal={hide} />
        <Text style={styles.title}>Select Currency</Text>
        <TabContainer activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchInput activeTab={activeTab} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.modalBackground,
    marginTop: 40,
    paddingTop: 15,
    paddingHorizontal: 15,
    gap: 10,
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.modalTitle,
    textAlign: "center",
    color: Colors.modalTitle,
  },
});

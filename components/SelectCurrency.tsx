import { BlurView } from "expo-blur";
import { Modal, StyleSheet, View } from "react-native";

import CloseButton from "./CloseButton";
import ModalTitle from "./ModalTitle";
import SearchInput from "./SearchInput";
import TabContainer from "./TabContainer";
import { Color } from "../constants/Color";
import { TabProvider } from "../contexts/TabContext";

interface ModalProps {
  visible: boolean;
  hide: () => void;
}

export default function SelectCurrency({ visible, hide }: ModalProps) {
  return (
    <Modal visible={visible} onRequestClose={hide} animationType="slide">
      <BlurView
        experimentalBlurMethod="dimezisBlurView"
        blurReductionFactor={100}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <CloseButton onPress={hide} />
          <ModalTitle />
          <TabProvider>
            <TabContainer />
            <SearchInput />
          </TabProvider>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.modalBackground,
    marginTop: 40,
    paddingTop: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    gap: 10,
  },
});

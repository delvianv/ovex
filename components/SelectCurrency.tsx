import { BlurView } from "expo-blur";
import { useContext, useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import CloseButton from "./CloseButton";
import CurrencyItem from "./CurrencyItem";
import ModalTitle from "./ModalTitle";
import SearchInput from "./SearchInput";
import TabContainer from "./TabContainer";
import { API } from "../constants/API";
import { Color } from "../constants/Color";
import { CurrenciesContext } from "../contexts/CurrenciesContext";
import { TabContext } from "../contexts/TabContext";

interface ModalProps {
  visible: boolean;
  hide: () => void;
}

interface Currency {
  id: string;
  name: string;
  type: string;
  icon_url: string;
}

export default function SelectCurrency({ visible, hide }: ModalProps) {
  const currencies = useContext(CurrenciesContext);
  const activeTab = useContext(TabContext);
  const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    setFilteredCurrencies(
      activeTab === "Crypto"
        ? currencies.filter((currency) => currency.type === "coin")
        : currencies.filter((currency) => currency.type === "fiat")
    );
  }, [activeTab]);

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
          <TabContainer />
          <SearchInput />
          <FlashList
            data={filteredCurrencies}
            renderItem={({ item }) => <CurrencyItem id={item.id} />}
            keyExtractor={(item) => item.id}
          />
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

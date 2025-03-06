import { BlurView } from "expo-blur";
import { useContext, useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import CloseButton from "./CloseButton";
import CurrencyItem from "./CurrencyItem";
import ModalTitle from "./ModalTitle";
import SearchInput from "./SearchInput";
import TabContainer from "./TabContainer";
import { Color } from "../constants/Color";
import { SearchContext } from "../contexts/SearchContext";
import { TabContext } from "../contexts/TabContext";

import {
  Currency,
  CurrencyContext,
  SetSourceCurrency,
  SetDestinationCurrency,
} from "../contexts/CurrencyContext";

interface ModalProps {
  visible: boolean;
  hide: () => void;
  label: string;
}

export default function SelectCurrency({ visible, hide, label }: ModalProps) {
  const currencies = useContext(CurrencyContext);
  const activeTab = useContext(TabContext);
  const searchQuery = useContext(SearchContext);

  const setCurrency = useContext(
    label.includes("SOURCE") ? SetSourceCurrency : SetDestinationCurrency
  );

  const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    if (label.includes("SOURCE")) {
      const filteredByType = currencies.filter((currency) =>
        activeTab === "Crypto"
          ? currency.type === "coin"
          : currency.type === "fiat"
      );

      const filteredByName = filteredByType.filter((currency) =>
        currency.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredCurrencies(filteredByName);
    }
  }, [currencies, activeTab, searchQuery]);

  const handlePress = (id: string) => {
    setCurrency(id);
    hide();
  };

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
            renderItem={({ item }) => (
              <CurrencyItem id={item.id} onPress={handlePress} />
            )}
            keyExtractor={(item) => item.id}
            estimatedItemSize={40}
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

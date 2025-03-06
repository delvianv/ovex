import { BlurView } from "expo-blur";
import { useContext, useEffect } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import CloseButton from "./CloseButton";
import CurrencyItem from "./CurrencyItem";
import ModalTitle from "./ModalTitle";
import SearchInput from "./SearchInput";
import TabContainer from "./TabContainer";
import { API } from "../constants/API";
import { Color } from "../constants/Color";
import { TabProvider } from "../contexts/TabContext";

import {
  CurrenciesContext,
  SetCurrenciesContext,
} from "../contexts/CurrenciesContext";

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
  const setCurrencies = useContext(SetCurrenciesContext);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch(API.currencies);
      const data: Currency[] = await response.json();
      setCurrencies(data);
    };

    fetchCurrencies();
  }, []);

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
            <FlashList
              data={currencies}
              renderItem={({ item }) => <CurrencyItem id={item.id} />}
              keyExtractor={(item) => item.id}
            />
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

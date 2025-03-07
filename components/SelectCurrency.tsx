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
import { MarketContext } from "../contexts/MarketContext";

import {
  Currency,
  CurrencyContext,
  SourceCurrency,
  SetSourceCurrency,
  SetDestinationCurrency,
} from "../contexts/CurrencyContext";

interface ModalProps {
  visible: boolean;
  hide: () => void;

  // Is this component for source or destination currency?
  source: boolean;
}

export default function SelectCurrency({ visible, hide, source }: ModalProps) {
  const currencies = useContext(CurrencyContext);
  const markets = useContext(MarketContext);
  const sourceCurrency = useContext(SourceCurrency);

  const setCurrency = useContext(
    source ? SetSourceCurrency : SetDestinationCurrency
  );

  const [activeTab, setActiveTab] = useState("Crypto");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState<string[]>([]);

  useEffect(() => {
    const filterCurrencies = (currencies: Currency[]) => {
      const filteredByType = currencies.filter((currency) =>
        activeTab === "Crypto"
          ? currency.type === "coin"
          : currency.type === "fiat"
      );

      const filteredByName = filteredByType.filter((currency) =>
        currency.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredCurrencies(filteredByName.map((currency) => currency.id));
    };

    const validCurrencies = () => {
      const baseMarkets = markets.filter(
        (market) => market.base_currency === sourceCurrency
      );

      const quoteMarkets = markets.filter(
        (market) => market.quote_currency === sourceCurrency
      );

      const baseCurrencies = quoteMarkets.map((market) => market.base_currency);
      const quoteCurrencies = baseMarkets.map(
        (market) => market.quote_currency
      );

      return currencies.filter(
        (currency) =>
          baseCurrencies.includes(currency.id) ||
          quoteCurrencies.includes(currency.id)
      );
    };

    // Show all currencies for source currency
    // Only show currencies from markets for destination currency
    filterCurrencies(source ? currencies : validCurrencies());
  }, [currencies, markets, activeTab, searchQuery, sourceCurrency]);

  const handlePressItem = (id: string) => {
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
          <TabContainer activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchInput
            query={searchQuery}
            setQuery={setSearchQuery}
            activeTab={activeTab}
          />
          <FlashList
            data={filteredCurrencies}
            renderItem={({ item }) => (
              <CurrencyItem id={item} onPress={handlePressItem} />
            )}
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

import { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import CloseButton from "./CloseButton";
import CurrencyItem from "./CurrencyItem";
import SearchInput from "./SearchInput";
import TabContainer from "./TabContainer";
import { API } from "../constants/API";
import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";
import { Currency } from "../App";

interface Market {
  base_currency: string;
  quote_currency: string;
}

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  setCurrency: (currency: Currency) => void;
  sourceCurrency?: Currency;
}

export default function SelectCurrency({
  visible,
  setVisible,
  setCurrency,
  sourceCurrency,
}: ModalProps) {
  const [activeTab, setActiveTab] = useState("Crypto");
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [search, setSearch] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(API.currencies);
        const data: Currency[] = await response.json();

        if (!sourceCurrency) {
          setCurrencies(data);
          setFilteredCurrencies(
            data.filter((currency) => currency.type === "coin")
          );
        } else {
          fetchMarkets(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMarkets = async (currencies: Currency[]) => {
      try {
        const response = await fetch(API.markets);
        const data: Market[] = await response.json();
        const validMarkets = data.filter(
          (market) => market.base_currency === sourceCurrency?.id
        );
        const validCurrencyIDs = validMarkets.map(
          (market) => market.quote_currency
        );
        const validCurrencies = currencies.filter((currency) =>
          validCurrencyIDs.includes(currency.id)
        );
        setCurrencies(validCurrencies);
        setFilteredCurrencies(
          validCurrencies.filter((currency) => currency.type === "coin")
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrencies();
  }, [sourceCurrency]);

  const hide = () => {
    setVisible(false);
  };

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);

    const filteredByType = currencies.filter((currency) =>
      tab === "Crypto" ? currency.type === "coin" : currency.type === "fiat"
    );
    setFilteredCurrencies(
      filteredByType.filter((currency) =>
        currency.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleSearch = (query: string) => {
    setSearch(query);

    const filteredByType = currencies.filter((currency) =>
      activeTab === "Crypto"
        ? currency.type === "coin"
        : currency.type === "fiat"
    );
    setFilteredCurrencies(
      filteredByType.filter((currency) =>
        currency.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleSelectCurrency = (currency: Currency) => {
    setCurrency(currency);
    hide();
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
        <TabContainer activeTab={activeTab} handleChangeTab={handleChangeTab} />
        <SearchInput
          activeTab={activeTab}
          search={search}
          handleSearch={handleSearch}
        />
        <FlashList
          data={filteredCurrencies}
          renderItem={({ item }) => (
            <CurrencyItem
              item={item}
              handleSelectCurrency={handleSelectCurrency}
            />
          )}
          estimatedItemSize={39}
        />
      </View>
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
    gap: 10,
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.modalTitle,
    textAlign: "center",
    color: Color.modalTitle,
  },
});

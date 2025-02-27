import { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import CloseButton from "./CloseButton";
import CurrencyItem from "./CurrencyItem";
import SearchInput from "./SearchInput";
import TabContainer from "./TabContainer";
import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

interface Currency {
  id: string;
  name: string;
  type: string;
  icon_url: string;
}

export default function SelectCurrency({ visible, setVisible }: ModalProps) {
  const [activeTab, setActiveTab] = useState("Crypto");
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [search, setSearch] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch("https://www.ovex.io/api/v2/currencies");
      const data: Currency[] = await response.json();
      setCurrencies(data);
      setFilteredCurrencies(
        data.filter((currency) => currency.type === "coin")
      );
    };

    fetchCurrencies();
  }, []);

  const hide = () => {
    setVisible(false);
  };

  const onChangeTab = (tab: string) => {
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

  const onSearch = (query: string) => {
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
        <TabContainer activeTab={activeTab} onChangeTab={onChangeTab} />
        <SearchInput
          activeTab={activeTab}
          search={search}
          setSearch={onSearch}
        />
        <FlashList
          data={filteredCurrencies}
          renderItem={({ item }) => <CurrencyItem item={item} />}
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

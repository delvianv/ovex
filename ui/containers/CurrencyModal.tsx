import { FlashList } from "@shopify/flash-list";
import { useContext, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { CurrencyContext } from "@/lib/CurrencyProvider";
import CloseButton from "../components/CloseButton";
import CurrencyItem from "../components/CurrencyItem";
import ModalTitle from "../components/ModalTitle";
import SearchInput from "../components/SearchInput";
import TabContainer from "./TabContainer";

interface ModalProps {
  visible: boolean;
  close: () => void;
  markets: string[];
}

export default function CurrencyModal({ visible, close, markets }: ModalProps) {
  const currencies = useContext(CurrencyContext);

  const [activeTab, setActiveTab] = useState("Crypto");
  const [search, setSearch] = useState("");

  const filteredByMarkets = currencies.filter((currency) =>
    markets.includes(currency.id),
  );

  const filteredByType = filteredByMarkets.filter((currency) =>
    activeTab === "Crypto"
      ? currency.type === "coin"
      : currency.type === "fiat",
  );

  const filteredCurrencies = filteredByType.filter((currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Modal visible={visible} onRequestClose={close} transparent={true}>
      <View style={styles.container}>
        <CloseButton onPress={close} />
        <ModalTitle />
        <TabContainer activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchInput search={search} setSearch={setSearch} />
        <FlashList
          data={filteredCurrencies}
          renderItem={({ item }) => <CurrencyItem currencyID={item.id} />}
          estimatedItemSize={40}
        />
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
  currency: {},
});

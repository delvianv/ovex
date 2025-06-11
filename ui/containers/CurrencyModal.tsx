import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fetchCurrencies } from "@/lib/API";
import { CurrencyType } from "@/lib/types";
import CloseButton from "@/ui/components/CloseButton";
import CurrencyItem from "@/ui/components/CurrencyItem";
import ModalTitle from "@/ui/components/ModalTitle";
import SearchInput from "@/ui/components/SearchInput";
import TabContainer from "./TabContainer";

interface ModalProps {
  visible: boolean;
  close: () => void;
}

export default function CurrencyModal({ visible, close }: ModalProps) {
  const [currencies, setCurrencies] = useState<CurrencyType[]>([]);

  const [activeTab, setActiveTab] = useState("Crypto");
  const [search, setSearch] = useState("");

  const filteredByType = currencies.filter((currency) =>
    activeTab === "Crypto"
      ? currency.type === "coin"
      : currency.type === "fiat",
  );

  const filteredCurrencies = filteredByType.filter((currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCurrencies();
      setCurrencies(data);
    };
    
    fetchData();
  }, []);

  return (
    <Modal visible={visible} onRequestClose={close} transparent={true}>
      <View style={styles.container}>
        <CloseButton onPress={close} />
        <ModalTitle />
        <TabContainer activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchInput search={search} setSearch={setSearch} />
        <FlashList
          data={filteredCurrencies}
          renderItem={({ item }) => <CurrencyItem currency={item} />}
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
});

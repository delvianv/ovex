import { Image } from "expo-image";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { Currency, CurrencyContext } from "../contexts/CurrencyContext";

interface NameProps {
  id: string;
}

export default function CurrencyName({ id }: NameProps) {
  const currencies = useContext(CurrencyContext);
  const [currency, setCurrency] = useState<Currency>();

  useEffect(() => {
    setCurrency(currencies.find((currency) => currency.id === id));
  }, [id]);

  return (
    <>
      {currency && (
        <View style={styles.container}>
          <Image source={currency.icon_url} style={styles.currencyIcon} />
          <Text style={styles.currencyID}>{currency.id}</Text>
          <Text style={styles.currencyName}>{currency.name}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    gap: 8,
    alignItems: "center",
  },
  currencyIcon: {
    width: 20,
    height: 20,
  },
  currencyID: {
    fontFamily: FontFamily.modalCurrencyID,
    fontSize: FontSize.modalCurrencyID,
    color: Color.modalCurrencyID,
    textTransform: "uppercase",
  },
  currencyName: {
    fontFamily: FontFamily.modalCurrencyName,
    fontSize: FontSize.modalCurrencyName,
    color: Color.modalCurrencyName,
  },
});

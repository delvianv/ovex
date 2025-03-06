import { Image } from "expo-image";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";
import { Currency, CurrencyContext } from "../contexts/CurrencyContext";

interface NameProps {
  id: string;
  style: string;
}

export default function CurrencyName({ id, style }: NameProps) {
  const currencies = useContext(CurrencyContext);
  const [currency, setCurrency] = useState<Currency>();

  useEffect(() => {
    setCurrency(currencies.find((currency) => currency.id === id));
  }, [id]);

  return (
    <>
      {currency && (
        <View style={styles.container}>
          <Image
            source={currency.icon_url}
            style={style === "home" ? styles.icon : styles.modalIcon}
          />
          <Text style={style === "home" ? styles.id : styles.modalID}>
            {currency.id}
          </Text>
          <Text style={style === "home" ? styles.name : styles.modalName}>
            {currency.name}
          </Text>
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
  icon: {
    width: 16,
    height: 16,
  },
  modalIcon: {
    width: 20,
    height: 20,
  },
  id: {
    fontFamily: FontFamily.homeCurrencyID,
    fontSize: FontSize.homeCurrencyID,
    color: Color.homeCurrencyID,
    textTransform: "uppercase",
  },
  name: {
    fontFamily: FontFamily.homeCurrencyName,
    fontSize: FontSize.homeCurrencyName,
    color: Color.homeCurrencyName,
  },
  modalID: {
    fontFamily: FontFamily.modalCurrencyID,
    fontSize: FontSize.modalCurrencyID,
    color: Color.modalCurrencyID,
    textTransform: "uppercase",
  },
  modalName: {
    fontFamily: FontFamily.modalCurrencyName,
    fontSize: FontSize.modalCurrencyName,
    color: Color.modalCurrencyName,
  },
});

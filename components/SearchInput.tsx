import { Image } from "expo-image";
import { StyleSheet, TextInput, View } from "react-native";

import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/FontSize";

interface SearchProps {
  activeTab: string;
}

export default function SearchInput({ activeTab }: SearchProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icons/search.svg")}
        style={styles.icon}
      />
      <TextInput
        placeholder={`Search ${activeTab}`}
        placeholderTextColor={Colors.searchInput}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.inputBackground,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.searchInput,
  },
  icon: {
    width: 16,
    height: 16,
  },
  input: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.default,
    color: Colors.searchInput,
  },
});

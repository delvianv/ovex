import { Image } from "expo-image";
import { StyleSheet, TextInput, View } from "react-native";

import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";

interface SearchProps {
  activeTab: string;
  search: string;
  handleSearch: (query: string) => void;
}

export default function SearchInput({
  activeTab,
  search,
  handleSearch,
}: SearchProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icons/search.svg")}
        style={styles.icon}
      />
      <TextInput
        placeholder={`Search ${activeTab}`}
        placeholderTextColor={Color.searchInput}
        value={search}
        onChangeText={handleSearch}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.inputBackground,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: Color.searchInput,
  },
  icon: {
    width: 16,
    height: 16,
  },
  input: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.default,
    color: Color.searchInput,
  },
});

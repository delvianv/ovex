import { StyleSheet, TextInput, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Color } from "../constants/Color";
import { FontFamily } from "../constants/FontFamily";
import { FontSize } from "../constants/FontSize";

interface InputProps {
  query: string;
  setQuery: (query: string) => void;
  activeTab: string;
}

export default function SearchInput({
  query,
  setQuery,
  activeTab,
}: InputProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={16} color={Color.modalSearchIcon} />
      <TextInput
        placeholder={`Search ${activeTab}`}
        placeholderTextColor={Color.searchInput}
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
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
  searchInput: {
    fontFamily: FontFamily.searchInput,
    fontSize: FontSize.searchInput,
    color: Color.searchInput,
  },
});

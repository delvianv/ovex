import { Pressable, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Color } from "../constants/Color";

interface ButtonProps {
  onPress: () => void;
}

export default function CloseButton({ onPress }: ButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <MaterialIcons name="close" size={20} color={Color.modalCloseIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
});

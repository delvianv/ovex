import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontSize } from "@/constants/Fonts";

interface ButtonProps {
  onPress: () => void;
}

export default function CloseButton({ onPress }: ButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <MaterialIcons name="close" size={fontSize.text} color={colors.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
});

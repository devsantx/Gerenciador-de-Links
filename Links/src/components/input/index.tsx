import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/color";

export function Input({...rest}: TextInputProps) {
    return (
    <TextInput
        style={styles.container}
        placeholderTextColor={colors.gray[400]}
        {...rest}
    />
    );
}

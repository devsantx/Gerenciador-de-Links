import { StyleSheet } from "react-native";
import { colors } from "@/styles/color";

export const styles = StyleSheet.create({
    container: {
        height: 52,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: colors.blue[300],
    },
    title: {
        color: colors.gray[900],
        fontSize: 16,
        fontWeight: "600",
    },
});

import { StyleSheet } from "react-native";
import { colors } from "@/styles/color";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    primaryTitle: {
        color: colors.blue[300],
        fontSize: 16,
        fontWeight: "600",
    },
    secundaryTitle: {
        color: colors.gray[400],
        fontSize: 16,
    },
});

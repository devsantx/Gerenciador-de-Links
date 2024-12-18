import { StyleSheet } from "react-native";
import { colors } from "@/styles/color";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 62,
    },
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24,
    },
    title: {
        color: colors.gray[200],
        fontSize: 24,
        fontWeight: "600",
    },
    label: {
        color: colors.gray[400],
        fontSize: 14,
        paddingHorizontal: 24,
    },
    form: {
        padding: 24,
        gap: 16,
    }
})

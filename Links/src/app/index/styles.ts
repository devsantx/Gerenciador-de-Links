import { Modal, StyleSheet } from "react-native";

import { colors } from "@/styles/color"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    header:{
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    logo:{
        height: 50,
        width: 50,
    },
    links:{
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100,
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: colors.gray[800],
        borderWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 50,
        padding: 24
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
    },
    modalTitle: {
        flex: 1,
        fontWeight: "500",
        fontSize: 16,
        color: colors.gray[400],
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200],
    },
    modalUrl: {
        fontSize: 14,
        color: colors.gray[400],
    },
    modalFooter: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical: 14
    },

})

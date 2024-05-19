import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Card: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',

        backgroundColor: '#e6e6e6',      

        marginLeft: 24,
        marginRight: 24,
        marginBottom: 20,

        padding: 15,
        borderRadius: 10,
    },

    container: {
        flexDirection: 'row',
        gap: 15,
    },

    textCard: {
        fontWeight: '600',
        fontSize: 16,
        color: '#000000',
    },
})
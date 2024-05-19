import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    myCards: {
        flexDirection: 'row',
        alignContent: 'center',
        gap: 15,
        backgroundColor: '#e6e6e6',      
        margin: 24,
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
    },

    textMyCards: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 16,
    },

    Card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24,
        borderTopColor: '#00000040',
        borderTopWidth: 0.5,
    },

    cardSubtitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
        color: '#000000',
    },
})

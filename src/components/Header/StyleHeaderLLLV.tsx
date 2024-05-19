import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '18%',

        paddingTop: 30,
        paddingLeft: 24,
        paddingBottom: 8,
        paddingRight: 24,

        backgroundColor: '#810AD0',
        justifyContent: 'space-around',
    },

    top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    optionsIcon: {
        flexDirection: 'row',
    },

    userIcon: {
        height: 50,
        width: 50,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 99,
        backgroundColor: '#A75DD9',
    },

    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    totalMoney: {
        padding: 24,
    },

    account: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    subtitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
        color: '#000000',
    },

    money: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 8,
        color: '#000000',
        marginBottom: 10,
    },

    moneyNotVisible: {
        marginTop: 8,
        height: 30,
        width: '45%',
        backgroundColor: '#c1bec2',
        borderRadius: 2,
        marginBottom: 6.7,
    }
})

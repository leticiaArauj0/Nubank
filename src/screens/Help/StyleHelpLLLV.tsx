import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-between',
    },

    containerTop: {
        width: '100%',
        flexDirection: 'row',
        margin: 24,
    },

    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#00000070',
        alignSelf: 'center',
    },

    textContainer: {
        width: '73%',
        justifyContent: 'center'
    },

    input: {
        width: 365,
        height: 50,
        fontSize: 16,
        margin: 24,
        borderWidth: 1,
        borderColor: '#00000070',
        borderRadius: 5,
        padding: 10,
        color: '#00000070',
        position: 'absolute',
    },

    icon: {
        position: 'relative',
        left: 350,
        top: 35,
    },

    subtitle: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 100,
    },

    containerSearch: {
        marginTop: 20,
    },

    containerContact: {
        borderTopWidth: 0.5,
        borderTopColor: '#00000050',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 100,
    },

    text: {
        color: '#810AD0',
        fontSize: 16,
        fontWeight: '700',
        padding: 20
    },

    line: {
        borderWidth: 0.3,
        borderColor: '#00000050',
        height: 62,
        width: 0.5,
    }
})

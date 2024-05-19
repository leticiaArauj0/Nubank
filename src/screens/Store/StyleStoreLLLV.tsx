import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '12%',
        paddingLeft: 24,
        paddingRight: 24,

        backgroundColor: '#810AD0',
        justifyContent: 'space-around',
    },

    text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        marginRight: 24,
        marginLeft: 24,
        marginTop: 30,
        marginBottom: 25,
    },

    cardFeatured: {
        height: 380,
        width: 280,
        borderRadius: 10,
        marginRight: 20,
    },

    containerAds: {
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 10,
        flexDirection: 'row',
        gap: 20,
    },

    containerTexts: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },

    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000000'
    },

    
    description: {
        width: 190,
        fontSize: 14,
        color: '#00000070',
    },

    icon: {
        height: 65,
        width: 65,
        borderRadius: 10,
    }
})

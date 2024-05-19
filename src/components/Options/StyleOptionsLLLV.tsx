import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    optionsContainer: {
        alignItems: 'center',
        marginRight: 8,
    },

    optionIcon: {
        height: width * 0.18,
        width: width * 0.18,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#e6e6e6',
        borderRadius: 99,
    },

    optionText: {
        fontWeight: '700',
        fontSize: 14,
        color: '#000000',
        marginTop: 6,
    }
})

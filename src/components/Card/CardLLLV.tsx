import { TouchableOpacity, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from "./StyleCardLLLV";

interface CardLLLVProps {
    icon: string,
    text: string
    money?: string
}

export function CardLLLV({ icon, text, money }: CardLLLVProps) {
    return(
        <TouchableOpacity style={styles.Card}>
            <View style={styles.container}>
                <Icon name={ icon } size={25} color='#000000' />
                <Text style={styles.textCard}>{ text }</Text>
            </View>
            { money ?
                <Text style={styles.textCard}>{money}</Text> :
                null
            }
        </TouchableOpacity>
    )
}

import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from "./StyleReviewLLLV";

interface ReviewLLLVProps {
    icon: string,
    text: string,
}

export function ReviewLLLV({ icon, text }: ReviewLLLVProps) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.borderIcon}>
                <Icon name={icon} color='#810AD0' size={36} />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
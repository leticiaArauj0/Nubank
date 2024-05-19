import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { styles } from "./StyleOptionsLLLV";

interface OptionsLLLVProps {
    icon: string,
    name: string
}

export function OptionsLLLV({ icon, name }: OptionsLLLVProps) {
    return(
        <TouchableOpacity style={styles.optionsContainer}>
            <View style={styles.optionIcon}>
                <Icon name={icon} size={25} color='#000000' />
            </View>
            <Text style={styles.optionText}>{name}</Text>
        </TouchableOpacity>
    )
}

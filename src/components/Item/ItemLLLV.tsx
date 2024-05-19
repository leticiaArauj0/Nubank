import { Text, View } from "react-native";
import Right from "react-native-vector-icons/AntDesign"
import { styles } from "./StyleItemLLLV";

interface ItemLLLVProps {
    title: string,
    text: string
}

export function ItemLLLV({title, text}: ItemLLLVProps) {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text} >{text}</Text>
            </View>
            <Right name="right" size={18} color="#908D91" />
        </View>
    )
}

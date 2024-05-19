import { Text, View } from "react-native";
import { styles } from "./StyleNewsLLLV";

interface NewsLLLVProps {
    textPurple: string,
    textBlack: string
}

export function NewsLLLV({ textPurple, textBlack }: NewsLLLVProps) {
    return(
        <View style={styles.newContainer}>
            <Text style={styles.newText}><Text style={styles.newTextPurple}>{textPurple}</Text>{textBlack}</Text>
        </View>
    )
}

import { TouchableOpacity, View } from "react-native";
import User from "react-native-vector-icons/AntDesign"
import Question from "react-native-vector-icons/AntDesign"
import Email from "react-native-vector-icons/MaterialCommunityIcons"
import { styles } from "./StyleTopOptionsLLLV";
import { StackNavigationProp } from '@react-navigation/stack'

interface TopOptionsLLLVProps {
    navigation:  StackNavigationProp<any,any>
}

export function TopOptionsLLLV({ navigation }: TopOptionsLLLVProps) {
    return(
        <View style={styles.top}>
            <View style={styles.userIcon}>
                <User
                    name="user"
                    size={25}
                    color="#ffffff"
                />
            </View>
                
            <View style={styles.optionsIcon}>
                <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                    <Question
                        name="questioncircleo"
                        size={25}
                        color='#ffffff'
                        style={{ marginRight: 16 }}
                    />
                </TouchableOpacity>
                <Email 
                    name="email-plus-outline"
                    size={25}
                    color='#ffffff'
                />
            </View>
        </View>
    )
}
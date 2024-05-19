import { View, Text, TouchableOpacity } from "react-native"
import User from "react-native-vector-icons/AntDesign"
import Eye from "react-native-vector-icons/Ionicons"
import Question from "react-native-vector-icons/AntDesign"
import Email from "react-native-vector-icons/MaterialCommunityIcons"
import Right from "react-native-vector-icons/AntDesign"
import { styles } from "./StyleHeaderLLLV"
import { useState } from "react"
import { StackNavigationProp } from '@react-navigation/stack'

interface HeaderLLLVProps {
    navigation:  StackNavigationProp<any,any>
}

export function HeaderLLLV({ navigation }: HeaderLLLVProps) {
    const [showMoney, setShowMoney] = useState(false)

    return(
        <>
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.userIcon}>
                    <User
                        name="user"
                        size={25}
                        color="#ffffff"
                    />
                </View>
                
                <View style={styles.optionsIcon}>
                    <TouchableOpacity onPress={() => setShowMoney(!showMoney)}>
                        {
                            showMoney ? (
                                <Eye
                                    name="eye-outline"
                                    size={25}
                                    color='#ffffff'
                                    style={{ marginRight: 16 }}
                                />
                            )
                             : (
                                <Eye
                                    name="eye-off-outline"
                                    size={25}
                                    color='#ffffff'
                                    style={{ marginRight: 16 }}
                                />
                             )
                        }
                        
                    </TouchableOpacity>
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

            <Text style={styles.text}>
                Olá, Gabriel POO
            </Text>
        </View> 
        <View style={styles.totalMoney}>
            <View style={styles.account}>
                <Text style={styles.subtitle}>Conta</Text>
                <TouchableOpacity>
                    <Right name="right" size={18} color="#908D91" />
                </TouchableOpacity>
            </View>
            {
                showMoney ?
                <Text style={styles.money}>R$ 2.947,94</Text> :
                <View style={styles.moneyNotVisible}></View>
            } 
        </View>
        </>
    )
}

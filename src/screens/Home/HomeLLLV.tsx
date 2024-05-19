import { ScrollView, Text, View } from "react-native";
import { styles } from "./StyleHomeLLLV";
import { HeaderLLLV } from "../../components/Header/HeaderLLLV";
import { OptionsLLLV } from "../../components/Options/OptionsLLLV";
import Card from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import Right from "react-native-vector-icons/AntDesign"
import { NewsLLLV } from "../../components/News/NewsLLLV";
import { StackNavigationProp } from '@react-navigation/stack'

interface HomeLLLVProps {
    navigation:  StackNavigationProp<any,any>
}

export function HomeLLLV({ navigation }: HomeLLLVProps) {
    return(
        <View style={styles.container}>
            <HeaderLLLV navigation={navigation} />
            <View>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginLeft: 24, paddingRight: 50 }}
                >
                    <OptionsLLLV icon="pix" name="Pix" />
                    <OptionsLLLV icon="credit-card" name="Pagar" />
                    <OptionsLLLV icon="currency-exchange" name="Empréstimo" />
                    <OptionsLLLV icon="phone-iphone" name="Recarga" />
                    <OptionsLLLV icon="payments" name="Transferir" />
                    <OptionsLLLV icon="stacked-bar-chart" name="Investir" />                   
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.myCards}>
                <Card name="credit-card-multiple-outline" size={25} color='#000000' />
                <Text style={styles.textMyCards}>Meus cartões</Text>
            </TouchableOpacity>

            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginLeft: 24, paddingRight: 30 }}
                >
                    <NewsLLLV
                        textPurple="Novidades! "
                        textBlack="Conheça a ferramenta de Controle de Gastos do Nubank."
                    />
                    <NewsLLLV
                        textPurple="Facilite seus planos futuros"
                        textBlack=": guarde  dinheiro nas Caixinhas."
                    />
                    <NewsLLLV
                        textPurple="Convide amigos para o Nubank "
                        textBlack="e debloqueie brasões incríveis."
                    />
                </ScrollView>
            </View>

            <View style={styles.Card}>
                <Text style={styles.cardSubtitle}>Cartão de crédito</Text>
                <TouchableOpacity>
                    <Right name="right" size={18} color="#908D91" />
                </TouchableOpacity>
            </View>
        </View>       
    )
}

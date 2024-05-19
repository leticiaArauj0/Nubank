import { Text, View } from "react-native";
import { TopOptionsLLLV } from "../../components/TopOptions/TopOptionsLLLV";
import { styles } from "./StyleMoneyLLLV";
import { CardLLLV } from "../../components/Card/CardLLLV";
import { StackNavigationProp } from '@react-navigation/stack'

interface MoneyLLLVProps {
    navigation:  StackNavigationProp<any,any>
}

export function MoneyLLLV({ navigation }: MoneyLLLVProps) {
    return(
        <>
        <View style={styles.container}>
            <TopOptionsLLLV navigation={navigation} />
        </View>
        
        <View>
            <Text style={styles.text}>Acompanhe seu dinheiro</Text>
            <View>
                <CardLLLV icon="gift" text="Caixinhas" money="R$ 100,00" />
                <CardLLLV icon="bar-chart" text="Investimentos" money="R$ 317,94" />
                <CardLLLV icon="bitcoin" text="Cripto" money="R$ 758,90" />
            </View>
            <View style={styles.line}></View>
            <View>
                <Text style={styles.text}>Seguros</Text>
                <CardLLLV icon="heart-o" text="Seguro de vida" />
                <CardLLLV icon="mobile-phone" text="Seguro de celular" />
            </View>
        </View>
        </>
    )
}
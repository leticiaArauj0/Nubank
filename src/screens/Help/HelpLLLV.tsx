import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from "./StyleHelpLLLV";
import { StackNavigationProp } from '@react-navigation/stack'
import { ReviewLLLV } from "../../components/Review/ReviewLLLV";
import { ItemLLLV } from "../../components/Item/ItemLLLV";
import { useMemo, useState } from "react";

interface HelpLLLVProps {
    navigation: StackNavigationProp<any,any>
}

export function HelpLLLV({ navigation }: HelpLLLVProps) {
    const [search, setSearch] = useState('')

    const items = [
        {
            id: 1,
            title: "Novidade",
            text: "Tudo sobre o Nubank e nossos produtos."
        },
        {
            id: 2,
            title: "Conta",
            text: "Conheça tudo sobre a sua conta digital.",
        },
        {
            id: 3,
            title: "Pagar Fatura",
            text: "Descubra como e onde pagar a sua fatura."
        }
    ]

    const itemsFilter = useMemo(() => {
        const lowerSearch = search.toLowerCase()
        return items?.filter((item) => item.title.toLowerCase().startsWith(lowerSearch))
    }, [search, items]) 

    return(
        <View style={styles.container}>
            <View>
                <View style={styles.containerTop}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name="close" size={36} color='#810AD0' />
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>ME AJUDA</Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Qual é a sua dúvida?"
                        placeholderTextColor='#00000070'
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
                    <Icon name="search1" size={25} color='#810AD0' style={styles.icon} />
                </View>
                <View>
                    <Text style={styles.subtitle}>Como você avalia o Me Ajuda?</Text>
                    <View style={{flexDirection: 'row'}}>
                        <ReviewLLLV icon="alert-outline" text="Péssimo" />
                        <ReviewLLLV icon="emoticon-sad-outline" text="Ruim" />
                        <ReviewLLLV icon="emoticon-happy-outline" text="Bom" />
                        <ReviewLLLV icon="heart-outline" text="Perfeito" />
                    </View>
                </View>
                <View style={styles.containerSearch}>
                    {itemsFilter.map(item => {
                        return(
                            <ItemLLLV key={item.id} title={item.title} text={item.text} />
                        )
                    })}
                </View>
            </View>
            <View style={styles.containerContact}>
                <Text style={styles.text}>E-MAIL</Text>
                <View style={styles.line}></View>
                <Text style={styles.text}>CHAT</Text>
            </View>
        </View>
    )
}

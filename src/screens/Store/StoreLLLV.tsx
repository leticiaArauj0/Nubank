import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./StyleStoreLLLV";
import { TopOptionsLLLV } from "../../components/TopOptions/TopOptionsLLLV";
import { StackNavigationProp } from '@react-navigation/stack'

interface StoreLLLVProps {
    navigation:  StackNavigationProp<any,any>
}


export function StoreLLLV({ navigation }: StoreLLLVProps) {
    return(
        <>
        <View style={styles.container}>
            <TopOptionsLLLV navigation={navigation} />
        </View>
        <View>
            <ScrollView>
                <Text style={styles.text}>Destaques</Text>
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ marginLeft: 21, paddingRight: 24 }}
                    >
                
                        <Image
                            style={styles.cardFeatured}
                            source={{
                                uri: 'https://i.redd.it/60d9m823r5k91.jpg',
                            }}
                        />
                        <Image
                            style={styles.cardFeatured}
                            source={{
                                uri: 'https://conteudo.imguol.com.br/c/noticias/2013/12/16/propagandas-antigas-de-eletronicos-anuncio-do-apple-ii-plus-da-apple---1985-1387205716941_374x500.jpg.webp',
                            }}
                        />
                        <Image
                            style={styles.cardFeatured}
                            source={{
                                uri: 'https://conteudo.imguol.com.br/c/noticias/2013/12/16/propagandas-antigas-de-eletronicos-anuncio-norte-americano-do-computador-tms-9900-da-technico---1978-1387205718000_371x500.jpg.webp',
                            }}
                        />
                    </ScrollView>
                </View>
                <Text style={styles.text}>Tem de tudo</Text>
                <View style={styles.containerAds}>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: 'https://yt3.googleusercontent.com/hWzN6PKY6hyUXy62uvn9Kqh89ZjhN0bwz2H_dkvNFDcbeDm4zcd0lwukKg6dMhy7w2Z6cLzjvQ=s900-c-k-c0x00ffffff-no-rj',
                        }}
                    />
                    <View style={styles.containerTexts}>
                        <View>
                            <Text style={styles.title}>Shopee</Text>
                            <Text style={styles.description}>Cumpon para compras acima de R$40.</Text>
                        </View>
                        <Text style={styles.title}>R$10 OFF</Text>
                    </View>
                </View>
                <View style={styles.containerAds}>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjFUnIlZ9spojpwnCBOB4MnfkHsh_yCtGDX7HmOGOGA&s',
                        }}
                    />
                    <View style={styles.containerTexts}>
                        <View>
                            <Text style={styles.title}>Magazine Luiza</Text>
                            <Text style={styles.description}>Para produtos vendidos e entregas Magalu</Text>
                        </View>
                        <Text style={styles.title}>15% OFF</Text>
                    </View>
                </View>
                <View style={{width: '100%', height: 200}}></View>
            </ScrollView>
        </View>
        </>
    )
}

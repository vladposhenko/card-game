import { FC } from "react"
import { Text, StyleSheet, TouchableOpacity, View, ImageBackground, SafeAreaView, Platform, StatusBar } from "react-native"
import { SvgXml } from 'react-native-svg'
import { backButton, heart } from "../../../assets/svg"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../Navigation"

const headerBackgroundImage = require('../../../assets/headerBackgroun.png')


interface IHeaderProps {
    navigation: NativeStackNavigationProp<RootStackParamList>
    currentLives: number
    countOfGuessedCards: number
    totalCards: number
}

const Header: FC<IHeaderProps> = ({ navigation, currentLives, countOfGuessedCards, totalCards }) => {
    const livesArray = Array.from({ length: currentLives }, (_, index) => index)
    return (
        <ImageBackground source={headerBackgroundImage}>
            <View style={styles.headerContainer}>
                <SafeAreaView style={styles.innerContainer}>
                    <View style={{  flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                            <SvgXml xml={backButton} />
                        </TouchableOpacity>
                        <View style={{ flexBasis: '52%', flexDirection: 'row', gap: 5, alignSelf: 'flex-end', flexGrow: 0 }}>
                            {livesArray.map((item) => ( <SvgXml xml={heart} /> ))}
                        </View>
                    </View>
                        <View style={{ backgroundColor: '#24BFC9', padding: 5, borderRadius: 20, width: 48, alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>{countOfGuessedCards} / {totalCards}</Text>
                        </View>
                </SafeAreaView>
            </View>   
        </ImageBackground>
    )
}

export default Header



const styles = StyleSheet.create({
    headerContainer: {
        height: 102,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10
    },
    innerContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  });

  
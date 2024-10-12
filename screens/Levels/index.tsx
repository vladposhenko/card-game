import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { FC, useEffect } from "react"
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native"
import { RootStackParamList } from "../../Navigation"
import { LEVELS_DATA } from "../../data"
import LevelCard from "../../components/Levels/LevelCard"
import { useAppDispatch } from "../../hooks/redux"
import { ILevelItem } from "../../models"
import { setCurrentLevel } from "../../store/appReducer"

const appBackground = require('../../assets/levelsBackground.png')
const headerBackground = require('../../assets/headerBackgroun.png')
const headerSmallLogo = require('../../assets/smallLogo.png')
const info = require('../../assets/info.png')

interface ILevelsProps {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

const Levels: FC<ILevelsProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        navigation.setOptions({
            headerBackground: () => (
                <ImageBackground
                    source={headerBackground}
                    style={{ width: '110%', height: '100%' }}
              />
            ),
            headerTitle: () => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={headerSmallLogo} style={{ width: 52, height: 30 }}/>
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Rules')}>
                    <Image source={info} style={{ width: 30, height: 30 }}/>
                </TouchableOpacity>
            )
        })
    }, [])

    const onCardPress = (level: ILevelItem) => {
        navigation.navigate('Game')
        dispatch(setCurrentLevel(level))
    }

    return (
        <ImageBackground
            source={appBackground}
            style={styles.container}
        >
            <View style={{ 
                    flexGrow: 0,
                    flexDirection: 'row', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center', 
                    gap: 20, 
                    alignItems: 'center', 
                }}>
                {LEVELS_DATA.map((level) => {
                    return (
                        <LevelCard level={level} onCardPress={() => onCardPress(level)} />
                    )
                })}
            </View>
        </ImageBackground>
    )
}

export default Levels



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      alignItems:'center',
      justifyContent: 'center'
    },
    logo: {
        width: '60%'
    }
  });
  
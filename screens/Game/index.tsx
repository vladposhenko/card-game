import { FC, useEffect, useState } from "react"
import { StyleSheet, ImageBackground, View } from "react-native"
import { useAppSelector } from "../../hooks/redux"
import FlipCard from "../../components/Levels/FlipCard"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../Navigation"
import Header from "../../components/ui/Header"
import ModalView from "../../components/ui/ModalView"

interface IGameProps {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

const Game: FC<IGameProps> = ({ navigation }) => {
    const [isCardsShowed, setCardsShowed] = useState(true)
    const { currentLevel } = useAppSelector(state => state.app)
    const [cardsState, setCardsState] = useState(currentLevel.cards)
    const [twoSelectedCards, setTwoSelectedCards] = useState([])
    const [currentLives, setCurrentLives] = useState(3)
    const [countOfGuessedCards, setCountOfGuessedCards] = useState(0)
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false)
    const [isFailModalVisible, setFailModalVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCardsShowed(false)
        }, 2000)

        navigation.setOptions({
            header: (props) => <Header currentLives={currentLives} {...props}/>
        })
    }, [])

    useEffect(() => {
        navigation.setOptions({
            header: (props) => <Header currentLives={currentLives} countOfGuessedCards={countOfGuessedCards} totalCards={currentLevel.countOfSpots} {...props}/>
        })
        if(countOfGuessedCards === currentLevel.countOfSpots) {
            setTimeout(() => {
                setSuccessModalVisible(true)
            }, 500)
        }
        if(!currentLives) {
            setTimeout(() => {
                setFailModalVisible(true)
            }, 500)
        }
    }, [currentLives, countOfGuessedCards])
    

    useEffect(() => {
        if(twoSelectedCards.length === 2) {
            if(twoSelectedCards[0].cardId === twoSelectedCards[1].cardId ) {
                setTwoSelectedCards([])
                setCountOfGuessedCards(countOfGuessedCards + 2)
            } else {
                setTimeout(() => {
                    const openedCardState = cardsState.map((cardItem) => {
                        if(cardItem.id === twoSelectedCards[0].id || cardItem.id === twoSelectedCards[1].id) {
                            return {...cardItem, isOpened: false}
                        } else {
                            return cardItem
                        }
                    })
                    setCardsState(openedCardState)
                    setCurrentLives(currentLives - 1)
                    setTwoSelectedCards([])
                }, 1000)
            }
            // setTwoSelectedCards([])
        }
    }, [twoSelectedCards])

    const onGameCardPress = (card: any) => {
        if(!card.isOpened) setTwoSelectedCards([...twoSelectedCards, card])
        const openedCardState = cardsState.map((cardItem) => {
            if(cardItem.id === card.id) {
                return {...cardItem, isOpened: true}
            } else {
                return cardItem
            }
        })
        setCardsState(openedCardState)
    }

    return (
        <ImageBackground source={currentLevel.backgroundImage} style={styles.gameContainer}>
            <View style={styles.cardContainer}>
                {cardsState.map((card) => <FlipCard 
                    hiddenImage={card.cardImage} 
                    isCardOpened={isCardsShowed || card.isOpened}
                    onCardPress={() => onGameCardPress(card)}
                    isDisabled={isCardsShowed}
                    cardWidth={currentLevel.cardWidth}
                />
                )}
            </View>
            <ModalView 
                modalText={'YOU WON'}
                isModalVisible={isSuccessModalVisible}
            />
            <ModalView 
                modalText={'YOU LOST'}
                isModalVisible={isFailModalVisible}
             />
        </ImageBackground>
    )
}

export default Game



const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding: 15,
        justifyContent: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginHorizontal: 'auto',
        marginTop: -100
      },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
    }
  });
  
import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

const logo = require('../../../assets/closedCard.png')

interface IFlipCardProps {
    isCardOpened: boolean
    hiddenImage: string
    isDisabled: boolean
    cardWidth: number
    onCardPress: () => void
}

const FlipCard: FC<IFlipCardProps> = ({ hiddenImage, isCardOpened, onCardPress, isDisabled, cardWidth }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(isCardOpened);
  const rotateY = useSharedValue<number>(!isCardOpened ? 0 : 180);

  const flipCard = () => {
    // setIsFlipped(!isFlipped);
    rotateY.value = withTiming(!isCardOpened ? 0 : 180, { duration: 500 });
  };

  useEffect(() => {
    rotateY.value = withTiming(!isCardOpened ? 0 : 180, { duration: 500 });
        // if(!isCardOpened) flipCard()
  }, [isCardOpened])

  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateY: `${interpolate(rotateY.value, [0, 180], [0, 180])}deg` },
      ],
      opacity: interpolate(rotateY.value, [0, 90, 180], [1, 0, 1]),
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateY: `${interpolate(rotateY.value, [0, 180], [-180, 0])}deg` },
      ],
      opacity: interpolate(rotateY.value, [0, 90, 180], [0, 1, 1]),
    };
  });
  return (
    <Pressable disabled={isDisabled} onPress={() => {
      onCardPress()
      // flipCard()
    }}>
      <View style={[styles.card, { width: cardWidth, height: cardWidth }]}>
        
            <Animated.View style={[styles.face, frontAnimatedStyle, styles.frontCard]}>
                <ImageBackground source={logo} style={{ width: '100%', height: '100%' }}>
                </ImageBackground>
            </Animated.View>
        

        <Animated.View style={[styles.face, backAnimatedStyle, styles.backCard]}>
            {/* <ImageBackground source={hiddenImage} resizeMode='contain' style={{ width: '90%', height: '90%' }}>
            </ImageBackground> */}
            <SvgXml xml={hiddenImage} style={{ overflow: 'hidden' }} />
        </Animated.View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    card: {
        margin: 10, // Отступы между карточками
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      face: {
        flex: 1,
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
      frontCard: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        position: 'absolute',
      },
      backCard: {
        backgroundColor: '#2E2B42',
        borderRadius: 10,
        position: 'absolute',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
});

export default FlipCard;

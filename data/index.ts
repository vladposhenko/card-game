import { fifthCandyCard, firstCandyCard, fourthCandyCard, secondCandyCard, sixthCandyCard, thirdCandyCard } from "../assets/svg/candyCards"
import { bone, booth, dog1, dog2 } from "../assets/svg/dogsCards"
import { firstJellyCard, secondJellyCard, thirdJellyCard } from "../assets/svg/jellyCards"
import { firstMagicCard, secondMagicCard, thirdMagicCard } from "../assets/svg/magicCards"
import { fifthRobotCard, firstRobotCard, fourthRobotCard, secondRobotCard, sixthRobotCard, thirdRobotCard } from "../assets/svg/robotsCards"
import { firstSpaceCard, secondSpaceCard, thirdSpaceCard } from "../assets/svg/spaceCards"
import { matia, soup, tiger, umbrella } from "../assets/svg/tigerCards"
import { home, zeus } from "../assets/svg/zeusCards"
import { ILevelItem } from "../models"

const zeusBackground = require('../assets/games/zeus/zeusBackground.png')
const zeusGameTitle = require('../assets/games/zeus/zeusTitleImage.png')
const dogsBackground = require('../assets/games/dogs/dogsBackground.png')
const dogsGameTitle = require('../assets/games/dogs/dogsTitleImage.png')
const tigerBackground = require('../assets/games/tiger/tigerBackground.png')
const tigerGameTitle = require('../assets/games/tiger/tigerTitleImage.png')
const candyBackground = require('../assets/games/candy/candyBackground.png')
const candyGameTitle = require('../assets/games/candy/candyTitleImage.png')
const spaceBackground = require('../assets/games/space/spaceBackground.png')
const spaceGameTitle = require('../assets/games/space/spaceTitleImage.png')
const jellyBackground = require('../assets/games/jelly/jellyBackground.png')
const jellyGameTitle = require('../assets/games/jelly/jellyTitleImage.png')
const magicBackground = require('../assets/games/magic/magicBackground.png')
const magicGameTitle = require('../assets/games/magic/magicTitleImage.png')
const robotsBackground = require('../assets/games/robots/robotsBackground.png')
const robotsGameTitle = require('../assets/games/robots/robotsTitleImage.png')

// zeus cards
const houseImage = require('../assets/games/zeus/zeusCards/house.png')
const god = require('../assets/games/zeus/zeusCards/god.png')

// dogs cards
const firstDogsCard = require('../assets/games/dogs/dogsCards/dog-1.png')
const secondDogsCard = require('../assets/games/dogs/dogsCards/dog-2.png')
const thirdDogsCard = require('../assets/games/dogs/dogsCards/bone.png')
const fourthDogsCard = require('../assets/games/dogs/dogsCards/booth.png')

export const LEVELS_DATA: Array<ILevelItem> = [
    {
        name: 'Zeus',
        backgroundImage: zeusBackground,
        gameTitleImage: zeusGameTitle,
        countOfSpots: 4,
        cardWidth: 150,
        cards: [
            {
                id: 1,
                cardId: 1,
                cardImage: home,
                isOpened: false
            },
            {
                id: 2,
                cardId: 2,
                cardImage: zeus,
                isOpened: false
            },
            {
                id: 3,
                cardId: 1,
                cardImage: home,
                isOpened: false
            },
            {
                id: 4,
                cardId: 2,
                cardImage: zeus,
                isOpened: false
            }
        ] 
    },
    {
        name: 'Dogs',
        backgroundImage: dogsBackground,
        gameTitleImage: dogsGameTitle,
        countOfSpots: 8,
        cardWidth: 120,
        cards: [
            {
                id: 1,
                cardId: 1,
                cardImage: dog1,
                isOpened: false
            },
            {
                id: 2,
                cardId: 2,
                cardImage: dog2,
                isOpened: false
            },
            {
                id: 3,
                cardId: 3,
                cardImage: bone,
                isOpened: false
            },
            {
                id: 4,
                cardId: 4,
                cardImage: booth,
                isOpened: false
            },
            {
                id: 5,
                cardId: 1,
                cardImage: dog1,
                isOpened: false
            },
            {
                id: 6,
                cardId: 2,
                cardImage: dog2,
                isOpened: false
            },
            {
                id: 7,
                cardId: 3,
                cardImage: bone,
                isOpened: false
            },
            {
                id: 8,
                cardId: 4,
                cardImage: booth,
                isOpened: false
            }
        ] 
    },
    {
        name: 'Tiger',
        backgroundImage: tigerBackground,
        gameTitleImage: tigerGameTitle,
        countOfSpots: 8,
        cardWidth: 120,
        cards: [
            {
                id: 1,
                cardId: 2,
                cardImage: soup,
                isOpened: false
            },
            {
                id: 2,
                cardId: 1,
                cardImage: tiger,
                isOpened: false
            },
            {
                id: 3,
                cardId: 3,
                cardImage: umbrella,
                isOpened: false
            },
            {
                id: 4,
                cardId: 1,
                isOpened: false,
                cardImage: tiger
            },
            {
                id: 5,
                cardId: 4,
                isOpened: false,
                cardImage: matia
            },
            {
                id: 6,
                cardId: 2,
                cardImage: soup,
                isOpened: false
            },
            {
                id: 7,
                cardId: 4,
                isOpened: false,
                cardImage: matia
            },
            {
                id: 8,
                cardId: 3,
                cardImage: umbrella,
                isOpened: false
            },
        ] 
    },
    {
        name: 'Candy',
        backgroundImage: candyBackground,
        gameTitleImage: candyGameTitle,
        countOfSpots: 12,
        cardWidth: 90,
        cards: [
            {
                id: 1,
                cardId: 1,
                cardImage: firstCandyCard,
                isOpened: false
            },
            {
                id: 2,
                cardId: 2,
                cardImage: secondCandyCard,
                isOpened: false
            },
            {
                id: 3,
                cardId: 3,
                cardImage: thirdCandyCard,
                isOpened: false
            },
            {
                id: 4,
                cardId: 4,
                cardImage: fourthCandyCard,
                isOpened: false
            },
            {
                id: 5,
                cardId: 5,
                cardImage: fifthCandyCard,
                isOpened: false
            },
            {
                id: 6,
                cardId: 6,
                cardImage: sixthCandyCard,
                isOpened: false
            },
            {
                id: 7,
                cardId: 1,
                cardImage: firstCandyCard,
                isOpened: false
            },
            {
                id: 8,
                cardId: 2,
                cardImage: secondCandyCard,
                isOpened: false
            },
            {
                id: 9,
                cardId: 3,
                cardImage: thirdCandyCard,
                isOpened: false
            },
            {
                id: 10,
                cardId: 4,
                cardImage: fourthCandyCard,
                isOpened: false
            },
            {
                id: 11,
                cardId: 5,
                cardImage: fifthCandyCard,
                isOpened: false
            },
            {
                id: 12,
                cardId: 6,
                cardImage: sixthCandyCard,
                isOpened: false
            },
        ] 
    },
    {
        name: 'Space',
        backgroundImage: spaceBackground,
        gameTitleImage:  spaceGameTitle,
        countOfSpots: 6,
        cardWidth: 150,
        cards: [
            {
                id: 1,
                cardId: 1,
                cardImage: firstSpaceCard,
                isOpened: false
            },
            {
                id: 2,
                cardId: 2,
                cardImage: secondSpaceCard,
                isOpened: false
            },
            {
                id: 3,
                cardId: 3,
                cardImage: thirdSpaceCard,
                isOpened: false
            },
            {
                id: 4,
                cardId: 1,
                cardImage: firstSpaceCard,
                isOpened: false
            },
            {
                id: 5,
                cardId: 2,
                cardImage: secondSpaceCard,
                isOpened: false
            },
            {
                id: 6,
                cardId: 3,
                cardImage: thirdSpaceCard,
                isOpened: false
            },
        ] 
    },
    {
        name: 'Jelly',
        backgroundImage: jellyBackground,
        gameTitleImage: jellyGameTitle,
        countOfSpots: 6,
        cardWidth: 150,
        cards: [
            {
                id: 1,
                cardId: 1,
                cardImage: firstJellyCard,
                isOpened: false
            },
            {
                id: 2,
                cardId: 2,
                cardImage: secondJellyCard,
                isOpened: false
            },
            {
                id: 3,
                cardId: 3,
                cardImage: thirdJellyCard,
                isOpened: false
            },
            {
                id: 4,
                cardId: 1,
                cardImage: firstJellyCard,
                isOpened: false
            },
            {
                id: 5,
                cardId: 2,
                cardImage: secondJellyCard,
                isOpened: false
            },
            {
                id: 6,
                cardId: 3,
                cardImage: thirdJellyCard,
                isOpened: false
            },
        ] 
    },
    {
        name: 'Magic',
        backgroundImage: magicBackground,
        gameTitleImage: magicGameTitle,
        countOfSpots: 6,
        cardWidth: 150,
        cards: [
            {
                id: 1,
                cardId: 1,
                cardImage: firstMagicCard,
                isOpened: false
            },
            {
                id: 2,
                cardId: 2,
                cardImage: secondMagicCard,
                isOpened: false
            },
            {
                id: 3,
                cardId: 3,
                cardImage: thirdMagicCard,
                isOpened: false
            },
            {
                id: 4,
                cardId: 1,
                cardImage: firstMagicCard,
                isOpened: false
            },
            {
                id: 5,
                cardId: 2,
                cardImage: secondMagicCard,
                isOpened: false
            },
            {
                id: 6,
                cardId: 3,
                cardImage: thirdMagicCard,
                isOpened: false
            },
        ] 
    },
    {
        name: 'Robots',
        backgroundImage: robotsBackground,
        gameTitleImage: robotsGameTitle,
        countOfSpots: 12,
        cardWidth: 90,
        cards: [
            {
                id: 1,
                cardId: 1,
                cardImage: firstRobotCard,
                isOpened: false
            },
            {
                id: 2,
                cardId: 2,
                cardImage: secondRobotCard,
                isOpened: false
            },
            {
                id: 3,
                cardId: 3,
                cardImage: thirdRobotCard,
                isOpened: false
            },
            {
                id: 4,
                cardId: 4,
                cardImage: fourthRobotCard,
                isOpened: false
            },
            {
                id: 5,
                cardId: 5,
                cardImage: fifthRobotCard,
                isOpened: false
            },
            {
                id: 6,
                cardId: 6,
                cardImage: sixthRobotCard,
                isOpened: false
            },
            {
                id: 7,
                cardId: 1,
                cardImage: firstRobotCard,
                isOpened: false
            },
            {
                id: 8,
                cardId: 2,
                cardImage: secondRobotCard,
                isOpened: false
            },
            {
                id: 9,
                cardId: 3,
                cardImage: thirdRobotCard,
                isOpened: false
            },
            {
                id: 10,
                cardId: 4,
                cardImage: fourthRobotCard,
                isOpened: false
            },
            {
                id: 11,
                cardId: 5,
                cardImage: fifthRobotCard,
                isOpened: false
            },
            {
                id: 12,
                cardId: 6,
                cardImage: sixthRobotCard,
                isOpened: false
            },
        ] 
    }
]
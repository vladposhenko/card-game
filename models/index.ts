interface ICardLevel {
    id: number
    cardId: number
    cardImage: string
    isOpened: boolean
}

export interface ILevelItem {
    name: string
    backgroundImage: string
    gameTitleImage: string
    countOfSpots: number
    cardWidth: number
    cards: Array<ICardLevel>
  }
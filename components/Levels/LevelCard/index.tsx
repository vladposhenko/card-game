import { FC } from "react"
import { Image, TouchableOpacity } from "react-native"

interface ILevelCardProps {
    level: any
    onCardPress: () => void
}


const LevelCard: FC<ILevelCardProps> = ({ level, onCardPress }: any) => {
    return (
        <TouchableOpacity onPress={onCardPress} style={{ alignItems: 'center'}}>
            <Image source={level.gameTitleImage} style={{ width: 130, height: 130 }}/>
        </TouchableOpacity>
    )
}

export default LevelCard

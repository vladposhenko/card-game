import { FC } from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"

interface IButtonProps {
    title: string
    onPress: () => void
}

const Button: FC<IButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button



const styles = StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      bottom: 90,
      width: 160,
      height: 40,
      backgroundColor: '#6EBCF7',
      justifyContent: 'center',
      borderRadius: 70
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
    }
  });
  
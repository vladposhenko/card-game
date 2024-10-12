import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image } from "react-native"
import Button from "../../components/ui/Button"
const appBackground = require('../../assets/bg_2.png')
const logo = require('../../assets/logo.png')

const WelcomePage = ({ navigation }: any) => {
    const handleButtonPress = () => {
        navigation.navigate('Levels')
    }
    return (
        <ImageBackground
            source={appBackground}
            style={styles.container}
        >
            <View style={{ width: 300, height: 300 }}>
                <Image style={styles.logo} source={logo}/>
            </View>
           <Button onPress={handleButtonPress} title={'START'}/>
        </ImageBackground>
    )
}

export default WelcomePage



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3498db', // Replace with your desired color
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%'
    }
  });
  
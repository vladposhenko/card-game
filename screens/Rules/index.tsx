import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image } from "react-native"
import Button from "../../components/ui/Button"


const appBackground = require('../../assets/levelsBackground.png')
const logo = require('../../assets/logo.png')

const Rules = ({ navigation }: any) => {
    const handleButtonPress = () => {
        navigation.navigate('Levels')
    }
    return (
        <ImageBackground style={styles.container} source={appBackground}>
            <SafeAreaView>
                <Text style={styles.rulesTitle}>RULES</Text>
                <Text style={styles.rulesText}>Lorem ipsum dolor sit amet consectetur. A ut sit pellentesque vel. Sit tincidunt praesent adipiscing in magna erat enim nec urna. Aliquet volutpat id arcu fames varius mus ultricies mollis. Adipiscing blandit cursus faucibus vel ullamcorper dignissim at...</Text>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Rules



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15
    },
    rulesTitle: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 25
    },
    rulesText: {
        fontSize: 18,
        textAlign: 'left', 
        color: 'white',
        marginTop: 30,
        lineHeight: 28
    }
  });
  
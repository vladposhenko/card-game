import { NavigationContainer } from "@react-navigation/native"
import WelcomePage from "./screens/WelcomePage"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Levels from "./screens/Levels";
import { Image, ImageBackground } from "react-native";
import Rules from "./screens/Rules";
import Game from "./screens/Game";

const headerBackgroundImage = require('./assets/headerBackgroun.png')
const headerSmallLogo = require('./assets/smallLogo.png')
const headerBackImage = require('./assets/back.png')

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    [route: string]: any
}

const headerBackground = () => (
    <ImageBackground
        source={headerBackgroundImage}
        style={{ width: '110%', height: '100%' }}
  />
)

const headerTitle = () => (
    <Image source={headerSmallLogo} style={{ width: 52, height: 30 }}/>
)

const headerBack = () => (
    <Image source={headerBackImage} style={{ width: 8, height: 30 }}/>
)

const Navigation = () => {
 return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomePage">
            <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }}/>
            <Stack.Screen name="Levels" component={Levels} options={{ headerBackVisible: false }}/>
            <Stack.Screen name="Rules" component={Rules} options={{ headerBackground, headerTitle, }}/>
            <Stack.Screen name="Game" component={Game} options={{ headerTitle: '', }}/>
        </Stack.Navigator>
    </NavigationContainer>
 )
}

export default Navigation
import { FC } from "react"
import { Text, StyleSheet, TouchableOpacity, Modal, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import { SvgXml } from "react-native-svg";
import { home, nextButton } from "../../../assets/svg";
import { useNavigation } from "@react-navigation/native";


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
interface IModalViewProps {
    isModalVisible: boolean
    modalText: string
}

const ModalView: FC<IModalViewProps> = ({ isModalVisible, modalText }) => {
    const naviation = useNavigation()
    return (
        <Modal transparent={true} visible={isModalVisible}>
            <View style={styles.modalBackground}>
                <View
                    colors={["#2BD5E8", "#8864E8"]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.modalContent}>
                        <AnimatedLinearGradient
                            colors={['#43BCF0', '#541896', '#711280']}
                            start={[0, 0.1]}
                            end={[1, 1]}
                            style={styles.gameStatus}
                        >
                            <Text style={{ fontSize: 26, color: 'white' }}>{modalText}</Text>
                        </AnimatedLinearGradient>
                        <View style={styles.buttonsContainer}>
                    <View style={{ flexDirection: 'row', gap: 80 }}>  
                        <TouchableOpacity onPress={() => naviation.navigate('Levels')}>
                            <SvgXml xml={home} style={{ width: 40, height: 40, zIndex: 1000 }}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SvgXml xml={nextButton} style={{ width: 40, height: 40, zIndex: 1000 }}/>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalView



const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8864E8',
        width: '90%',
        height: 220,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: 'white',
        zIndex: -10,
    },
    gameStatus: {
        width: 162,
        height: 72,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: -60,
        zIndex: 55
    }
  });
  
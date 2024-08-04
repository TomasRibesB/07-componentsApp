
import { Modal, Platform, Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Titulo"
import { Button } from "../../components/ui/Button"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const ModalScreen = () => {

    const [isVisible, setisVisible] = useState(false)
    const { colors } = useContext(ThemeContext);
    return (
        <CustomView margin>
            <Title text="Modal Screen" />

            <Button text="Abrir Modal" onPress={() => setisVisible(true)} />

            <Modal 
            visible={isVisible}
            animationType="slide"
            >
                <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <View
                    style={{
                        paddingHorizontal: 10,
                    }}>
                    <Title text="Modal" safe />
                    </View>
                    <View style={{flex:1}} />
                    <Button text="Cerrar" 
                    onPress={() => setisVisible(false)} 
                    styes={{
                        height: Platform.OS === 'android' ? 40 : 60,
                        borderRadius: 0,
                    }}
                    />
                </View>
            </Modal>
            
        </CustomView>
    )
}

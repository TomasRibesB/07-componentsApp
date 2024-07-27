
import { Modal, Platform, Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Titulo"
import { Button } from "../../components/ui/Button"
import { useState } from "react"

export const ModalScreen = () => {

    const [isVisible, setisVisible] = useState(false)

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
                    backgroundColor: 'rgba(0,0,0,0.1)',
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

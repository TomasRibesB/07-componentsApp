
import { Alert, Text, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Titulo"
import { globalStyles } from "../../../config/theme/theme"
import { Button } from "../../components/ui/Button"
import prompt from "react-native-prompt-android"
import { showPrompt } from "../../../config/adapters/prompt.adapter"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const AlertScreen = () => {

    const { isDark } = useContext(ThemeContext);

    const createTwoButtonAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light'
            }
        );
    }

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ], 
        {
            userInterfaceStyle: isDark ? 'dark' : 'light'
        });


    const onShowPrompt = () => {
        showPrompt({
            title: 'Prompt Title',
            subTitle: 'Prompt Subtitle',
            buttons: [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                }
            ],
        })
    }


    return (
        <CustomView style={globalStyles.globalMargin} >
            <Title safe text="Alertas" />

            <Button text="Alerta - 2 Botones"
                onPress={createTwoButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button text="Alerta - 3 Botones"
                onPress={createThreeButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button text="Prompt - Input"
                onPress={onShowPrompt}
            />

        </CustomView>
    )
}

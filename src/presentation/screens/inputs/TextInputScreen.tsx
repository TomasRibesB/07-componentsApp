
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Titulo"
import { globalStyles } from "../../../config/theme/theme"
import { Card } from "../../components/ui/Card"
import { useContext, useState } from "react"
import { ScrollView } from "react-native-gesture-handler"
import { ThemeContext } from "../../context/ThemeContext"

export const TextInputScreen = () => {

    const [form, setform] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const { colors } = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView>
                <CustomView margin>
                    <Title text="Text Inputs" safe />

                    <Card>
                        <TextInput style={{
                            ...globalStyles.input,
                            color: colors.text,
                            borderColor: colors.primary,
                        }}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese su nombre"
                            autoCapitalize="words"
                            autoCorrect={false}
                            onChangeText={value => setform({ ...form, name: value })}
                        />
                    </Card>

                    <View style={{ height: 10 }} />

                    <Card>
                        <TextInput style={{
                            ...globalStyles.input,
                            color: colors.text,
                            borderColor: colors.primary,
                        }}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese su email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={value => setform({ ...form, email: value })}
                        />

                    </Card>

                    <View style={{ height: 10 }} />

                    <Card>
                        <TextInput style={{
                            ...globalStyles.input,
                            color: colors.text,
                            borderColor: colors.primary,
                        }}
                            placeholderTextColor={colors.text}
                            placeholder="Ingrese su teléfono"
                            keyboardType="phone-pad"
                            onChangeText={value => setform({ ...form, phone: value })}
                        />
                    </Card>

                    <View>
                        <Text>{JSON.stringify(form, null, 3)}</Text>
                        <Text>{JSON.stringify(form, null, 3)}</Text>
                        <Text>{JSON.stringify(form, null, 3)}</Text>
                        <Text>{JSON.stringify(form, null, 3)}</Text>
                        <Text>{JSON.stringify(form, null, 3)}</Text>
                        <Text>{JSON.stringify(form, null, 3)}</Text>
                        <Text>{JSON.stringify(form, null, 3)}</Text>
                        <Text>{JSON.stringify(form, null, 3)}</Text>
                    </View>

                    <Card>
                        <Text>
                            Fin
                        </Text>
                    </Card>

                </CustomView>
                <View style={{ height: 50 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

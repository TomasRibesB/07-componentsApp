
import { useContext, useState } from "react";
import { StyleSheet, Switch, Text, View, Platform } from "react-native"
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
    isOn: boolean;
    text?: string;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, text, onChange }: Props) => {


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { colors } = useContext(ThemeContext);

    
    return (
        <View style={styles.switchRow}>

            {
                text && <Text style={{ color: colors.text }}>{text}</Text>
            }

            <Switch
                thumbColor={Platform.OS === 'android' ? colors.primary : ''}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onChange}
                value={isOn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
})
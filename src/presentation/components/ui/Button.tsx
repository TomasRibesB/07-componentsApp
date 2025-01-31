
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native"
import { globalStyles } from "../../../config/theme/theme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
    text: string;
    styes?: StyleProp<ViewStyle>;
    icon?: string;

    onPress?: () => void;
}

export const Button = ({ text, styes, icon, onPress }: Props) => {


    const { colors } = useContext(ThemeContext);

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ([
                globalStyles.btnPrimary,
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: colors.primary,
                },
                styes
            ])}
        >
            <Text style={[globalStyles.btnPrimaryText,
            {
                color: colors.buttonTextColor
            }
            ]}>
                {text}
            </Text>
        </Pressable>
    )
}

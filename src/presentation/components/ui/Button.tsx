
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native"
import { colors, globalStyles } from "../../../config/theme/theme";

interface Props {
    text: string;
    styes?: StyleProp<ViewStyle>;
    icon?: string;

    onPress?: () => void;
}

export const Button = ({ text, styes, icon, onPress }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ([
                globalStyles.btnPrimary,
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: colors.primary,
                }
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

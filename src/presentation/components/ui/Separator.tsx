
import { StyleProp, Text, View, ViewStyle } from "react-native"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";


interface Props {
    styes?: StyleProp<ViewStyle>;
}

export const Separator = ({ styes }: Props) => {

    const { colors } = useContext(ThemeContext);

    return (
        <View style={{ backgroundColor: colors.cardBackground }}>
            <View
                style={[
                    {
                        alignSelf: 'center',
                        width: '90%',
                        height: 1,
                        backgroundColor: colors.text,
                        opacity: 0.1,
                        marginVertical: 8,
                    },
                    styes
                ]}
            />
        </View>
    )
}

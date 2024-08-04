
import { Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

interface Props {
    text: string;
    safe?: boolean;
    bacgroundColor?: string;
}

export const SubTitle = ({ text, safe = false, bacgroundColor = 'none' }: Props) => {

    const { colors } = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();

    return (
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : null,
            marginBottom: 10,
            backgroundColor: bacgroundColor === 'none' ? colors.background : bacgroundColor,
            color: colors.text,
        }}>
            {text}
        </Text>
    )
}

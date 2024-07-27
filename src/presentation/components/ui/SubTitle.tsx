
import { Text, View } from "react-native"
import { colors, globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
    text: string;
    safe?: boolean;
    bacgroundColor?: string;
}

export const SubTitle = ({ text, safe = false, bacgroundColor = colors.background }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : null,
            marginBottom: 10,
            backgroundColor: bacgroundColor,
        }}>
            {text}
        </Text>
    )
}

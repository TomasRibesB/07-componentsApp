
import { Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
    text: string;
    safe?: boolean;
    white?: boolean;
}

export const Title = ({ text, safe, white }: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <Text
            style={{
                ...globalStyles.title, 
                color: white ? 'white' : 'black',
                marginTop: safe ? top : 0,
                marginBottom: 10,
            }}
        >{text}</Text>
    )
}

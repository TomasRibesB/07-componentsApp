import prompt from "react-native-prompt-android";

interface Options {
    title: string;
    subTitle?: string;
    buttons: ProptButton[];
    propmtType?: 'plain-text' | 'secure-text';
    plasholder?: string;
    defaultValue?: string;

}

interface ProptButton {
    text: string;
    onPress: () => void;
    style?: 'cancel' | 'destructive' | 'default';
}

export const showPrompt = ({
    title,
    subTitle,
    buttons,
    propmtType = 'plain-text',
    plasholder,
    defaultValue
}: Options) => {
    prompt(
        title,
        subTitle,
        buttons,
        {
            type: propmtType,
            cancelable: false,
            defaultValue: defaultValue, 
            placeholder: plasholder
        }
    );
}
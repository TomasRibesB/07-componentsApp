
import { useState } from "react";
import { ActivityIndicator, Animated, ImageStyle, StyleProp, Text, View } from "react-native"
import { useAnimations } from "../../hooks/useAnimations";

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { animatedOpacity, fadeIn } = useAnimations();
    const [isLoading, setIsLoading] = useState(true)

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            {
                isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    size={30}
                    color={'grey'}
                />
            }




            <Animated.Image
                source={{ uri }}
                onLoadEnd={() => {
                    fadeIn({ duration: 1000 });
                    setIsLoading(false);
                }}
                style={[style, { opacity: animatedOpacity }]}

            />
        </View>
    )
}

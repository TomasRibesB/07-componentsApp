
import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useAnimations } from "../../hooks/useAnimations";

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimations();


    return (
        <View style={styles.container}>


            <Animated.View style={[styles.purpleBox,
            {
                opacity: animatedOpacity,
                transform: [{
                    translateY: animatedTop
                }]
            }]} />


            <Pressable
                onPress={() => {fadeIn({});
                startMovingTopPosition({initialPosition: -100, easing: Easing.elastic(1),
                    duration: 700
                })
                
                }}>
                <Text style={{ marginTop: 10 }}>FadeIn</Text>
            </Pressable>

            <Pressable
                onPress={() => { fadeOut({});
                startMovingTopPosition({callback: () => animatedTop.resetAnimation(),
                })}}>
                <Text style={{ marginTop: 10 }}>FadeOut</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150
    }
})
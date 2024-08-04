
import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { useAnimations } from "../../hooks/useAnimations";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CustomView } from "../../components/ui/CustomView";
import { Button } from "../../components/ui/Button";

export const Animation101Screen = () => {

    const { colors } = useContext(ThemeContext);
    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimations();

    return (
        <CustomView margin
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >


            <Animated.View style={[
                {
                    backgroundColor: colors.primary,
                    width: 150,
                    height: 150
                },
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }]
                }]} />

                <View style={{ height: 10 }} />

            <Button text="FadeIn" onPress={() => {
                fadeIn({});
                startMovingTopPosition({
                    initialPosition: -100, easing: Easing.elastic(1),
                    duration: 700
                })
            }} 
            styes={{
                width: 150,
            }}
            />

            <View style={{ height: 10 }} />

            <Button
                text="FadeOut"
                onPress={() => {
                    fadeOut({});
                    startMovingTopPosition({
                        callback: () => animatedTop.resetAnimation(),
                    })
                }}
                styes={{
                    width: 150,
                }}
                />
        </CustomView>
    )
}
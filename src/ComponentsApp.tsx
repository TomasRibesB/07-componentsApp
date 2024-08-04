import 'react-native-gesture-handler';
//no mover el import de arriba

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';
import { PropsWithChildren } from 'react';

const AppState = ({ children }: PropsWithChildren) => {
    return (
        <NavigationContainer>
            <ThemeProvider>{children}</ThemeProvider>
        </NavigationContainer>
    )
}

export const ComponentsApp = () => {
    return (
        <AppState>
            <Navigator />
        </AppState>
    )
}

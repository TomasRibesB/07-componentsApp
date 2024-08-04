import 'react-native-gesture-handler';
//no mover el import de arriba

import * as React from 'react';
import { Navigator } from './presentation/navigator/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
    return (
        <ThemeProvider>
            <Navigator />
        </ThemeProvider>
    )
}

import 'react-native-gesture-handler';
//no mover el import de arriba

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';

export const ComponentsApp = () => {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    )
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../../containers/Welcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import StackScreens from './Stack';

const Stack = createStackNavigator();

const Aplication: React.FC = () => {
  return (
      <>
         <NavigationContainer   >
           <StatusBar backgroundColor="#fff" />
            <StackScreens/>
        </NavigationContainer>
    </>
  )
}

export default Aplication
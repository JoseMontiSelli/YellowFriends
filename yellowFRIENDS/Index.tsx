import React from 'react';
import {View} from 'react-native';
import { registerRootComponent } from 'expo'
import { NavigationContainer} from '@react-navigation/native'
import Navegacao from './src/Pages/Navegacao'


function Index (){
 return (
     <Navegacao/>
 );
}

export default registerRootComponent(Index);
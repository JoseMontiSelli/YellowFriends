import React from 'react';
import { registerRootComponent } from 'expo'
import {NavigationContainer} from '@react-navigation/native'
import {RotasNavBar} from './src/Pages/routes';


function Index (){
 return (
     <NavigationContainer>
         <RotasNavBar/>
     </NavigationContainer>
 );
}

export default registerRootComponent(Index);
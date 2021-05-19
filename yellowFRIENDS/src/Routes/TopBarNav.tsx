import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
// Imports do react navigator
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Import de telas
import {Home} from '../Pages/Home'
import Configuracao from "../Pages/Configuracao";
import {Cursor} from './Templates/Cursor'


const TopBar = createMaterialTopTabNavigator();

export default function TopBarNav() {
  return (
    <TopBar.Navigator initialRouteName="Home"

       tabBarOptions=
       {
            {
              labelStyle: { fontSize: 30,},
              style:{ elevation: 0 },
              indicatorStyle:{ backgroundColor: 'transparent', }
            }
        }
      >
      <TopBar.Screen name="Home" component={Home}
        options = {{ tabBarLabel: () => (<Cursor/>) }}
       />
      <TopBar.Screen name="Home2" component={Home}
        options = {{ tabBarLabel: () => (<Cursor/>) }}
       />
      <TopBar.Screen name="Home3" component={Home}
        options = {{ tabBarLabel: () => (<Cursor/>) }}
       />
      <TopBar.Screen name="Home4" component={Home}
        options = {{ tabBarLabel: () => (<Cursor/>) }}
       />
      <TopBar.Screen name="Home5" component={Home}
        options = {{ tabBarLabel: () => (<Cursor/>) }}
       />

    </TopBar.Navigator>
  );
}
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StyleSheet, View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Import de templates


// Import de telas
import Ajudar from "../Pages/Ajudar";
import TopBarNav from "./TopBarNav";
import BuscarAjuda from "../Pages/BuscarAjuda";
import Configuracoes from "../Pages/Configuracao"

const NavBar = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export function Rotas() {
    return (
        <Stack.Navigator 
        screenOptions= {
            { headerStyle: { backgroundColor: '#FFD600'},
        }
        }>
            <Stack.Screen name="Home" component={TopBarNav} />

        </Stack.Navigator>
    )
};
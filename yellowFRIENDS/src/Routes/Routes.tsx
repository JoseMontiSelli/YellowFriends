import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StyleSheet, View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
// Import de telas
import TopBarNav from "./TopBarNav";
import Configuracoes from "../Pages/Configuracao"
// import de metodos
import NomeDaRota from './Functions/NomeRota';

const NavBar = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


export function Rotas() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:
                    { backgroundColor: '#FFE600', height: 82, elevation: 0 },
                headerTitleStyle:
                    { fontSize: 22, fontWeight: 'bold' }

            }}>
            <Stack.Screen
                name="Minha Rede de ajuda"
                component={TopBarNav}
                options={({ route }) => ({ headerTitle: NomeDaRota(route) })} />

        </Stack.Navigator>
    )
};
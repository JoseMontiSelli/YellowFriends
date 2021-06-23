import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StyleSheet, View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
// Import de telas
import TopBarNav from "./TopBarNav";
import Configuracoes from "../Pages/Configuracao"
// import de metodos
import NomeDaRota from './Functions/NomeRota';
import { Login } from '../Pages/Login';
import { Cadastro } from '../Pages/Cadastro';

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
            options={{headerShown:false}}
            name="Login"
            component={Login}
            />
            <Stack.Screen
            options={{headerShown:false}}
            name="Cadastrar-se"
            component={Cadastro}
            />
            <Stack.Screen
                name="TopBarNav"
                component={TopBarNav}
                options={({ route }) => ({ headerTitle: NomeDaRota(route) })} />

        </Stack.Navigator>
    )
};
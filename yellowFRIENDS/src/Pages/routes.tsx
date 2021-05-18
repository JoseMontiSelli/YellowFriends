import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StyleSheet, View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Import de templates
import NavHome from '../Components/NavHome'

// Import de telas
import TelaAjudar from "./Ajudar/Ajudar";
import TelaHome from "./Home/Home";
import TelaBuscarAjuda from "./BuscarAjuda/BuscarAjuda";
import TelaConfiguracoes from "./Configuracao/Configuracao"

const NavBar = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export function Rotas() {
    return (
        <NavBar.Navigator
            initialRouteName="Home"
            tabBarOptions={{

                labelStyle: {
                    fontSize: 30,
                },
                style:{
                    elevation: 0
                },
                indicatorStyle:{
                    backgroundColor: 'transparent',
                }
            }}>
            <NavBar.Screen
                name="Home"
                component={TelaHome}
                options = {{
                    tabBarLabel: () => (<NavHome/>)
                }}
            />   

        </NavBar.Navigator>

    )
};




import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StyleSheet, StatusBar, View } from 'react-native'


// Import de telas
import TelaAjudar from "./Ajudar/Ajudar";
import TelaHome from "./Home/Home";
import TelaBuscarAjuda from "./BuscarAjuda/BuscarAjuda";
import TelaConfiguracoes from "./Configuracao/Configuracao"

const NavBar = createMaterialTopTabNavigator();

export function RotasNavBar() {
    return (
            <NavBar.Navigator
                initialRouteName="Home"
                tabBarOptions={{

                    labelStyle: {
                        fontSize: 12,
                        fontWeight: '700'
                    },
                    style: {
                        backgroundColor: '#FFE600',
                        fontWeight: 600
                    }
                }}>
                <NavBar.Screen
                    name="Home"
                    component={TelaHome} />

                <NavBar.Screen
                    name="Configurações"
                    component={TelaConfiguracoes} />

            </NavBar.Navigator>
    )

};


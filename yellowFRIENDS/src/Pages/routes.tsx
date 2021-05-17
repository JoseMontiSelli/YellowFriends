import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StyleSheet, StatusBar, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// Icones
import IconeHome from '../Components/ButtonHome'


// Import de telas
import TelaAjudar from "./Ajudar/Ajudar";
import TelaHome from "./Home/Home";
import TelaBuscarAjuda from "./BuscarAjuda/BuscarAjuda";
import TelaConfiguracoes from "./Configuracao/Configuracao"

const NavBar = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export function RotasNavBar() {
    return (
        <NavBar.Navigator
            initialRouteName="Home"
            tabBarOptions={{

                labelStyle: {
                    fontSize: 12,
                },
                tabStyle: {
                    paddingTop: 50,
                    backgroundColor: '#fff',

                },
                style: {
                    borderBottomColor: 'transparent'
                }

            }}>
            <NavBar.Screen
                name="Home"
                component={TelaHome}
                options={{
                    tabBarIcon: () => (
                        <IconeHome />
                    )
                }}
            />

        </NavBar.Navigator>

    )

};


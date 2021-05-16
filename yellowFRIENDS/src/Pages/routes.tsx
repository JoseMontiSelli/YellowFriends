import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Import de telas
import TelaAjudar from "./Ajudar/Ajudar";
import TelaHome from "./Home/Home";
import TelaBuscarAjuda from "./BuscarAjuda/BuscarAjuda";

const NavBar = createMaterialTopTabNavigator();

export function RotasNavBar() {
    return (
            <NavBar.Navigator>
                <NavBar.Screen
                    name="Home" 
                    component={TelaHome} />
                    
            {
            /* <NavBar.Screen
            name="Ajudar"
            component = {TelaAjudar}
            />


            <NavBar.Screen
            name="BuscarAjuda"
            component = {TelaBuscarAjuda}
            /> 
            
            */}
            </NavBar.Navigator>
    )
};
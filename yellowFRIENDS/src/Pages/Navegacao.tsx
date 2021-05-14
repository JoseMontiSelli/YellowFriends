import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import TelaAjudar from './Ajudar/Ajudar'
import TelaBuscarAjuda from './BuscarAjuda/BuscarAjuda'
import TelaConfiguracao from './Configuracao/Configuracao'
import TelaHome from './Home/Home'

const MenuNavegacao = createMaterialTopTabNavigator();

export default function RotasDeTelas(){
    return (
        <MenuNavegacao.Navigator>
            {/* Chama a tela de ajudar */}
            <MenuNavegacao.Screen
                name = "Ajudar"
                component = {TelaAjudar}
            >
            </MenuNavegacao.Screen>
            {/* Chama a home */}
            <MenuNavegacao.Screen
                name = "Home"
                component = {TelaHome}
            >
            </MenuNavegacao.Screen>

            {/* Chama o buscarAjuda */}
            <MenuNavegacao.Screen
                name = "BuscarAjuda"
                conponent = {TelaBuscarAjuda}
            >
            </MenuNavegacao.Screen>

        </MenuNavegacao.Navigator>
    );
}


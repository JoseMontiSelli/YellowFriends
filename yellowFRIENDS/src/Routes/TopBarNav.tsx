import React from 'react';
import { Dimensions, View, Text } from 'react-native';
// Imports do react navigator
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Import de telas
import { Home } from '../Pages/Home'
import Configuracao from "../Pages/Configuracao";
import { Cursor } from './Templates/Cursor'
import IconHome from '../images/icons/IconHome'
import Login from '../Pages/Login'


const TopBar = createMaterialTopTabNavigator();
const TabSize = Dimensions.get('window').width

export default function TopBarNav() {

  return (

    <TopBar.Navigator initialRouteName="Home"
      tabBarOptions={
        {
          labelStyle: { 
            fontSize: 30,
          },

          style:{ 
            elevation: 3,
            height: 70,
          },

          tabStyle: {
            width: TabSize/3,
            height: 70,
          },

          indicatorStyle:{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundColor: '#FFE600',
            top: 0,

            width: TabSize/8,
            marginLeft: TabSize/9.5,

            height: 48,  
            borderBottomEndRadius: 35,
            borderBottomStartRadius: 35, 
          }

        }
      }
    >
      <TopBar.Screen name="Seu Perfil" component={Login}
        options={{ tabBarLabel: () => (<Cursor iconName={'ajudar'} labelName={'Ajudar'} />) }}
      />
      <TopBar.Screen name="Minha rede de ajuda" component={Home}
        options={{
          tabBarLabel: () => (<Cursor iconName={'home'} labelName={'Home'} />),
        }}
      />
      <TopBar.Screen name="Buscar ajuda" component={Home}
        options={{
          tabBarLabel: () => (<Cursor labelName={'Buscar Ajuda'} iconName={'buscar ajuda'}/> )
        }}
      />
    </TopBar.Navigator>
  );
}
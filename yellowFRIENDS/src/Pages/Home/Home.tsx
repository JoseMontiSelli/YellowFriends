import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
// Imports do react navigator
import { createStackNavigator } from '@react-navigation/stack';
// Import de telas
import Screen_Home from './Components/Screen_Home'
import Configuracao from "../Configuracao/Configuracao";


const StackHome = createStackNavigator();

export default function Home() {
  return (
    <StackHome.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#FFD600'
      }
    }}>
      <StackHome.Screen name="Home" component={Screen_Home} />
    </StackHome.Navigator>
  );
}
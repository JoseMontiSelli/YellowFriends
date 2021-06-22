import React from 'react';
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Rotas } from './src/Routes/Routes';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Login from './src/Pages/Login'
function Index() {
    return (
        <SafeAreaView style = {styles.container}>
            <StatusBar backgroundColor="#FFD600" barStyle="dark-content"/>
            <NavigationContainer>
                <Rotas/>
            </NavigationContainer>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default registerRootComponent(Index);
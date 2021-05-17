import React from 'react';
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { RotasNavBar } from './src/Pages/routes';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

function Index() {
    return (
        <SafeAreaView
        style = {styles.container}
        >
            <StatusBar backgroundColor="#FFD600"/>
            <NavigationContainer>
                <RotasNavBar/>
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
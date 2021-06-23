import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

export function BotaoLogin({ tela }: any) {
    const chamarTela = useNavigation()
    return (
        <View style={styles.btn_Login}>
            <TouchableOpacity  onPress={() => chamarTela.navigate(tela)} >
                    <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn_Login: {
        position:'absolute',
        backgroundColor: '#FFD600',
        borderRadius: 30,
        top: '60%',
        width: 290,
        height: 53,
    },
    login: {
        top: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
    },

})
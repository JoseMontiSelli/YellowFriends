import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'

export function ProfileName() {

    return (
        <View style={styleName.containerNomeSobrenome}>
            <Text style={styleName.nomeSobrenome} >
                Antonio
            </Text>
            <Text style={styleName.nomeSobrenome}>
                Silva
            </Text>
        </View>
    )
}


const styleName = StyleSheet.create({
    //NOME DO USUARIO
    containerNomeSobrenome: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20
    },
    nomeSobrenome: {
        fontSize: 50,
        fontWeight: '700',
        marginHorizontal: 5
    },
})
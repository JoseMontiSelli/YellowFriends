import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'


export function ProfilePersonalInfos() {
    return (
        <View style={stylePersonalInfos.containerPersonalInfos}>
            {/* Parte da esquerda */}
            <View style={stylePersonalInfos.infos}>
                <View style={stylePersonalInfos.nick}>
                    <Text style={stylePersonalInfos.nickText}> @tonhao</Text>
                </View>

                <View style={stylePersonalInfos.localization}>
                    <Text style={stylePersonalInfos.localizationText}>São paulo</Text>
                </View>
            </View>

            {/* Linha central */}
            <View style={stylePersonalInfos.linhaCentral} />

            {/* Parte da direita */}

            <View style={stylePersonalInfos.infos}>
                <View style={stylePersonalInfos.tempoNoApp}>
                    <Text style={stylePersonalInfos.tempoNoAppText}>Tempo no app </Text>
                </View>

                <View style={stylePersonalInfos.time}>
                    <Text style={stylePersonalInfos.timeText}> 20 h </Text>
                </View>
            </View>
        </View>
    )
}

const stylePersonalInfos = StyleSheet.create({
    // INFORMAÇÕES PESSOAIS DO USUARIO
    containerPersonalInfos: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    infos: {
        flexDirection: 'column',
        marginHorizontal: 0
    },

    // LINHA CENTRAL
    linhaCentral: {
        width: 0,
        height: '100%',
        borderRightWidth: 2,
        marginHorizontal: 20
    },

    // PARTE DA ESQUERDA
    nick: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    nickText: {
        fontSize: 20
    },
    localization: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    localizationText: {
        fontSize: 20
    },

    // PARTE DA DIREITA
    tempoNoApp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    tempoNoAppText: {
        fontSize: 20
    },
    time: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        fontSize: 20
    },
})



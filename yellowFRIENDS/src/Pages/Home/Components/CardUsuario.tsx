import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface DadosUsuario {
    avatar: any;
    nome: string;
    hora: string;
    mensagem: string;
    isReaded: boolean;
}

export function CardUsuario({ nome, hora, mensagem, avatar, isReaded }: DadosUsuario) {

    if (isReaded == false) {
        return (
            <View style={styleCardUsuario.cardUsuario}>

                <View style={styleCardUsuario.component_image}>
                    <Image style={styleCardUsuario.image_Avatar} source={avatar} />
                </View>

                <View style={styleCardUsuario.cardUsuario_Infos}>

                    <View style={styleCardUsuario.cardUsuario_Header_NotReaded}>
                        <Text style={styleCardUsuario.cardUsuario_Usuario_notReaded}>{nome}</Text>
                        <Text style={styleCardUsuario.cardUsuario_Hora}>{hora}</Text>
                    </View>

                    <View style={styleCardUsuario.cardUsuario_Mensage}>
                        <Text style={styleCardUsuario.mensage}>{mensagem}</Text>
                    </View>

                </View>

            </View>
        )
    } 
    else 
    {
        return (
        <View style={styleCardUsuario.cardUsuario}>

            <View style={styleCardUsuario.component_image}>
                <Image style={styleCardUsuario.image_Avatar} source={avatar} />
            </View>
            
            <View style={styleCardUsuario.cardUsuario_Infos}>
                
                <View style={styleCardUsuario.cardUsuario_Header}>
                    <Text style={styleCardUsuario.cardUsuario_Usuario}>{nome}</Text>
                    <Text style={styleCardUsuario.cardUsuario_Hora}>{hora}</Text>
                </View>

                <View style={styleCardUsuario.cardUsuario_Mensage}>
                    <Text style={styleCardUsuario.mensage}>{mensagem}</Text>
                </View>

            </View>

            </View>
        )
    }
};
// CARD DO USUARIO

const styleCardUsuario = StyleSheet.create({
    cardUsuario: {
        height: 103,
        width: '100%',
        flexDirection: 'row',
        marginTop: 8
    },


    // IMAGEM DO USUARIO
    component_image: {
        height: '100%',
        width: '30%',

        justifyContent: 'center',
        alignItems: 'center'
    },
    // AVATAR
    image_Avatar: {
        height: 74,
        width: 74,
        borderRadius: 100
    },


    // COMPONENT USUARIO INFOS
    cardUsuario_Infos: {
        flexDirection: 'column',
        paddingVertical: 10,
        width: '70%',
        height: '100%'
    },


    // HEADER
    cardUsuario_Header: {
        height: '30%',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardUsuario_Header_NotReaded: {
        backgroundColor: '#FFE600',

        height: '30%',
        width: '100%',
        borderRadius: 3,

        flexDirection: 'row',
        paddingHorizontal: 10,

        justifyContent: 'space-between',
        alignItems: 'center'
    },


    // NICKNAME DO USUARIO
    cardUsuario_Usuario: {
        fontSize: 14,
        fontWeight: '400'
    },
    cardUsuario_Usuario_notReaded: {
        fontSize: 14,
        fontWeight: '700'
    },


    // HORARIO QUE O USUARIO MANDOU A MENSAGEM
    cardUsuario_Hora: {
        fontSize: 14,
        color: '#989898'
    },


    // MENSAGEM DO USUARIO
    cardUsuario_Mensage: {
        height: '70%',
        width: '100%',
        justifyContent: 'center',
        paddingStart: 10
    },
    mensage: {
        color: '#B8B8B8',
        fontWeight: '700',
        fontSize: 12
    }

});
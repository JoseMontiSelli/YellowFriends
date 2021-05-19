import React from 'react';
// Elementos importados do react native
import { View } from 'react-native'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import { FlatList } from 'react-native'
// Templates
import { Template_CardUsuario } from './Components/Template_CardUsuario'
import { Template_TittleBubble } from './Components/Template_TitleBubble'
// Dados pra popular a flatlist
import DADOS_CardUsuario from '../Data/DATA_Conversas'


export function Home() {
    return (
        <SafeAreaView style={home.main}>
            {/* Indicador de sessão de conversas do usuario */}
            <Template_TittleBubble text={"Conversas"} />
            
            {/* LISTA DE CARDS DO USUARIO */}
            <FlatList style={home.mainCards}
                data={DADOS_CardUsuario} // De onde vem os dados do usuario
                keyExtractor={(item) => item.id} // key que define que o item é unico
                renderItem = {({ item }) => 
                <Template_CardUsuario  // Template da lista
                    nome={item.nome}
                    hora={item.hora}
                    mensagem={item.mensagem}
                    avatar={item.avatar}
                    isReaded={item.isReaded} />
                } />
            <Template_TittleBubble text={"Grupos"} />
        </SafeAreaView>
    )
};

const home = StyleSheet.create({
    main: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    // Lista de usuarios
    mainCards: {
        width: '100%',
    },

});
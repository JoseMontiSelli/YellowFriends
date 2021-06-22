import React from 'react';
// Elementos importados do react native
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import { SectionList } from 'react-native'
// Templates
import { Template_CardUsuario } from './Components/Template_CardUsuario'
import { Template_TittleBubble } from './Components/Template_TitleBubble'
// Dados pra popular a flatlist;
import DADOS_CardUsuario from '../Data/DATA_HistoricoDeConversas';

export function Home() {

    return (
        <SafeAreaView style={home.main}>
            {/* LISTA DE CARDS DO USUARIO */}
            <SectionList style={home.mainCards}
                // De onde vem os dados do usuario
                sections={DADOS_CardUsuario}
                // key que define que o item é unico
                keyExtractor={(item, index) => item.id}
                renderSectionHeader={({ section: { title } }) => <Template_TittleBubble
                    text={title}
                />}

                renderItem={({ item }) =>
                    <Template_CardUsuario  // Template da lista
                        nome={item.nome}
                        hora={item.hora}
                        mensagem={item.mensagem}
                        avatar={item.avatar}
                        isReaded={item.isReaded} />
                } />
        </SafeAreaView>
    )
};

const home = StyleSheet.create({
    main: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    // Lista de usuarios
    mainCards: {
        width: '100%',
    },

});
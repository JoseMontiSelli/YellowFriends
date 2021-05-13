import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import { CardUsuario } from './src/components/CardUsuario'
import { registerRootComponent } from 'expo'
import DADOS_CardUsuario from './src/Data/DATA_Conversas'
  
function Home() {
  return (
    <SafeAreaView style={home.main}>
      <StatusBar backgroundColor="#FFD600" />
      {/* Sessão de conversas do usuario */}
      <View style={home.titleSection_Background}>
        <Text style={home.titleSection_Texto}>
          Coversas
        </Text>
      </View>
      {/* LISTA DE CARDS DO USUARIO */}
      <FlatList style={home.mainCards}

        data = {DADOS_CardUsuario} // De onde vem os dados do usuario
        keyExtractor = {(item) => item.id} // key que define que o item é unico
        renderItem = {({ item }) => <CardUsuario  // Template da lista
                                     nome={item.nome}
                                     hora={item.hora}
                                     mensagem={item.mensagem}
                                     avatar={item.avatar  }
                                     isReaded={item.isReaded} />
        }
      />
      <View style={home.titleSection_Background}>
        <Text style={home.titleSection_Texto}>
          Grupos
        </Text>
      </View>
    </SafeAreaView>
  );
}

const home = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 25,
    flexDirection: 'column',
    alignItems: 'center',
  },

  // titulo da sessão
  titleSection_Background: {
    backgroundColor: '#FFE600',
    width: 126,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28
  },
  titleSection_Texto: {
    color: '#ffffff',
    fontWeight: '700'
  },

  // Lista de usuarios
  mainCards: {
    width: '100%',
  },

});

export default registerRootComponent(Home);
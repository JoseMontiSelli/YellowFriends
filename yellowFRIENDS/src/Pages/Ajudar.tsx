import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, } from 'react-native';

export function Ajudar() {
  return (

    <ScrollView>
      <View style={styles.container}>

        {/* Topo da tela com informações pessoais */}
        <View style={styles.section_dadosusuarios}>
          {/* Imagem do usuario */}
          <View style={styles.containerImagemUsuario}>
            <Image
              style={styles.imagemUsuario}
              source={require('../images/Usuarios/Antonio.jpg')} />
          </View>

          {/* Nome do usuario*/}
          <View style={styles.containerNomeSobrenome}>
            <Text style={styles.nomeSobrenome} >
              Antonio
            </Text>
            <Text style={styles.nomeSobrenome}>
              Silva
            </Text>
          </View>

          {/* Infos pessoais do usuário */}
          <View style={styles.containerPersonalInfos}>
            {/* Infos extras */}
            <View style={styles.containerPersonalInfos}>
              {/* Parte da esquerda */}
              <View style={styles.infos}>
                <View style={styles.nick}>
                  <Text>@Tonhao</Text>
                </View>

                <View style={styles.localization}>
                  <Text>São paulo</Text>
                </View>
              </View>

              {/* Parte da direita */}

              <View style={styles.infos}>
                <View style={styles.tempoNoApp}>
                  <Text>Tempo no app </Text>
                </View>

                <View style={styles.time}>
                  <Text> 20 h </Text>
                </View>
              </View>

            </View>

          </View>

          {/* Biografia */}
          <View style={styles.bio}>
            <Text style={styles.textBio}>Eu sou só um cara legal tentando ajudar e gosto de trens</Text>
          </View>
        </View>

        <View style={styles.containerSelos}>

          <Image
            source={require('../images/Selos/selo_BemHumorado.png')}
            style={styles.selo} />

          <Image
            source={require('../images/Selos/selo_BomConselheiro.png')}
            style={styles.selo} />

          <Image
            source={require('../images/Selos/selo_BomOuvinte.png')}
            style={styles.selo} />

        </View>

        <StatusBar style={'auto'}></StatusBar>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // SESSÃO DE DADOS DO USUARIO
  section_dadosusuarios: {
    flex: 1,
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // IMAGEM DO USUARIO
  containerImagemUsuario: {
    flex: 1,
    width: 250,
    height: 250,
    borderRadius: 1000,
    overflow: 'hidden'
  },
  imagemUsuario: {
    width: '100%'
  },

  //NOME DO USUARIO
  containerNomeSobrenome: {
    width: '100%',
    flexDirection: 'row'
  },
  nomeSobrenome: {
    fontSize: 30,
    marginHorizontal: 10
  },

  // INFORMAÇÕES PESSOAIS DO USUARIO
  containerPersonalInfos: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  infos: {
    flexDirection:'column',
    marginHorizontal:10
  },

  // PARTE DA ESQUERDA
  nick: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15
  },
  localization: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15
  },

  // PARTE DA DIREITA
  tempoNoApp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15
  },
  time: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15
  },

  // BIOGRAFIA
  bio: {

  },
  textBio: {

  },

  //SELOS
  containerSelos: {

  },

  selo: {

  }

});

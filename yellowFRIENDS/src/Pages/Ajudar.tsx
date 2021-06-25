import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TextInput, } from 'react-native';

export function Ajudar() {
  return (

    <ScrollView>
      <View style={styles.container}>

        {/* Topo da tela com informações pessoais */}
        <View style={styles.section_dadosusuarios}>
          {/* Imagem do usuario */}
          <View style={styles.containerImagemUsuario}>
            <Image
              source={require('../images/Usuarios/Antonio.jpg')}
              style={styles.imagemUsuario}
               />
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
                  <Text style={styles.nickText}>@tonhao</Text>
                </View>

                <View style={styles.localization}>
                  <Text style={styles.localizationText}>São paulo</Text>
                </View>
              </View>

              {/* Linha central */}
              <View style={styles.linhaCentral} />

              {/* Parte da direita */}

              <View style={styles.infos}>
                <View style={styles.tempoNoApp}>
                  <Text style={styles.tempoNoAppText}>Tempo no app </Text>
                </View>

                <View style={styles.time}>
                  <Text style={styles.timeText}> 20 h </Text>
                </View>
              </View>
            </View>

          </View>

          {/* Biografia */}
          <View style={styles.bio}>
            <Text style={styles.textBio}>Eu sou só um cara legal tentando ajudar as pessoas e gosto de trens</Text>
          </View>
        </View>

        {/* Selos */}
        <View style={styles.containerSelos}>
          <View style={styles.tituloSelos}>
            <Text style={styles.tituloSelosTexto}>Seus selos</Text>
          </View>

          <Image
            resizeMode={'contain'}
            source={require('../images/Selos/selo_BemHumorado.png')}
            style={styles.selo} />

          <Image
            resizeMode={'contain'}
            source={require('../images/Selos/selo_BomConselheiro.png')}
            style={styles.selo} />

          <Image
            resizeMode={'contain'}
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
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // IMAGEM DO USUARIO
  containerImagemUsuario: {
    flex: 1,
    width: 240,
    height: 240,
    borderRadius: 1000,
    overflow: 'hidden'
  },
  imagemUsuario: {
    width: '100%'
  },

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

  // BIOGRAFIA
  bio: {
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 30,
  },
  textBio: {
    fontSize: 18,
  },

  //SELOS
  tituloSelos:{
    position:'absolute',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    width: 120,
    height:45,
    top:-20,
    left:50,
    borderWidth:3,
    borderRadius:5,

  },
  tituloSelosTexto:{
    fontWeight:'700',
    fontSize: 20,
  },
  containerSelos: {
    marginTop: 50,
    paddingVertical:40,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffe600'
  },
  selo: {
    width: 350,
    height: 150,
    overflow: 'visible',
    marginTop: 30
  }

});

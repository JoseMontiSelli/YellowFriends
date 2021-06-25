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
          {/* Infos pessoais do usuário */}
          <View style={styles.section_personalinfo}>

            {/* Nome do usuario*/}
            <View style={styles.containerNomeSobrenome}>
              <Text style={styles.nomeSobrenome} >
                Antonio
              </Text>
              <Text>
                Silva
              </Text>
            </View>

            {/* Infos extras */}
            <View style={styles.containerPersonalInfos}>
              {/* Parte da esquerda */}
              <View>
                <View style={styles.nick}>
                  <Text>tonhao </Text>
                </View>

                <View style={styles.localization}>
                  <Text> </Text>
                </View>
              </View>

              {/* Parte da direita */}

              <View>
                <View style={styles.tempoNoApp}>
                  <Text>Tempo no app </Text>
                </View>

                <View style={styles.time}>
                  <Text> 20 h </Text>
                </View>
              </View>

            </View>

          </View>

          <View style={styles.section_bio}>
            <Text style={styles.lbl_bio}>Eu sou só um cara legal tentando ajudar e gosto de trens</Text>
          </View>
        </View>

        <View style={styles.selos_background}>

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
    marginTop: 40,
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

// NOME DO USUARIO
  nomeSobrenome: {
    fontSize: 30,
    top: 30,
  },
  
  section_personalinfo: {
    flex: 1,
    top: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  section_nicklocalization: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15
  },
  vector_transpa: {
    width: 10,
  },
  section_tempoapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15
  },
  lbl_caption: {
    fontSize: 15
  },
  section_bio: {
    flex: 1,
    top: 60,
    justifyContent: 'center'

  },
  lbl_bio: {
    fontSize: 18,
    textAlign: 'center'

  },
  selos_background: {
    flex: 1,
    backgroundColor: '#FFE600',
    width: '100%',
    height: 1200,
    flexDirection: 'column',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title_Selos: {
    width: 113,
    height: 36,
    top: -400,
    right: 100
  },

  selo: {

  }

});

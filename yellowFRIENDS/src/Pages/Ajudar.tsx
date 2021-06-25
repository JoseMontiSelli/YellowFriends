import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
// IMPORT DE COMPONENTES
import { ProfileImage } from './Components/ProfileImage'
import { ProfileName } from './Components/ProfileName'
import { ProfilePersonalInfos } from './Components/ProfilePersonalInfos'
import { ProfileBio } from './Components/ProfileBio'


export function Ajudar() {
  return (

    <ScrollView>
      <View style={styles.container}>

        {/* Topo da tela com informações pessoais do usuario */}
        <View style={styles.section_dadosusuarios}>
          {/* Imagem do usuario */}
          <ProfileImage />
          {/* Nome do usuario*/} 
          <ProfileName /> 
           {/* Infos pessoais do usuário */}
          <ProfilePersonalInfos />
          
          <ProfileBio/> 
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

  //SELOS
  tituloSelos: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 120,
    height: 45,
    top: -20,
    left: 30,
    borderWidth: 3,
    borderRadius: 5,

  },
  tituloSelosTexto: {
    fontWeight: '700',
    fontSize: 20,
  },
  containerSelos: {
    marginTop: 50,
    paddingVertical: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffe600'
  },
  selo: {
    width: Dimensions.get('window').width * 0.9,
    height: 150,
    overflow: 'visible',
    marginTop: 30
  }

});

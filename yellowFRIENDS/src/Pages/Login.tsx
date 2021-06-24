import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import { BotaoLogin } from './Components/BotaoLogin';
import { BotaoCadastrar } from './Components/BotaoCadastrar';

export function Login() {

  return (
    <View style={styles.container}>
      {/* Metade do background amarelo */}
      <View style={styles.viewbackground}>
        {/* LBL QuemSomos */}
        <Text style={styles.lbl_quemsomos}> Quem somos nós </Text>
        {/* Logo YellowFRIENDS */}
        <View style={styles.icon_logo}>
          <Image source={require('../images/Logo.png')} />
          {/* Letreiro */}
          <Text>yellowFRIENDS</Text>
          {/* Slogan */}
          <Text>A tecnologia construida em comunidade</Text>
          {/* Caixa de texto */}
          <TextInput placeholder='Digite seu E-mail aqui' style={styles.input_Login} />
        </View>
      </View>

      {/* Buttons */}
        <BotaoLogin tela='TopBarNav'/>
        <BotaoCadastrar tela='Cadastrar-se'/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  /* Metade do background amarelo */
  viewbackground: {
    flex: 1,
    backgroundColor: '#FFE600',
    top: -214,
    height: 478,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* LBL QuemSomos */
  lbl_quemsomos: {
    position: 'absolute',
    width: 500,
    height: 25,
    left: '60%',
    top: '15%',
    fontWeight: 'bold'
  },
  /* Logo YellowFRIENDS */
  icon_logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  /* Letreiro */
  letreiro: {
    position: 'absolute',
    width: 315,
    height: 35,
    top: 170
  },
  /* Slogan */
  slogan: {
    position: 'absolute',
    top: '120%',
    width: 318,
    height: 15,
  },
  /* Caixa de texto Login */
  input_Login: {
    position: 'absolute',
    width: 286.7,
    height: 53.29,
    top: '145%',
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    justifyContent: 'center',
    textAlign: 'center'
  },
  /* Buttons */
  btn_Cadastro: {
    position: 'absolute',
    backgroundColor: '#FFD600',
    borderRadius: 30,
    width: 290,
    height: 53,
    top: '70%'
  },
  cadastro: {
    top: 7,
    textAlign: 'center',
    color: 'white',
    fontSize: 24
  },

  lbl_semcadastro: {
    position: 'absolute',
    left: '23%',
    top: '240%',
    fontSize: 18,
    textDecorationLine: 'underline'
  },
  vector_cabeça: {
    position: 'absolute',
    left: '80%',
    top: '87%',
    bottom: '55.65%'
  },
  vector_corpo: {
    position: 'absolute',
    left: '79%',
    top: '90%',
    bottom: '54.42%'
  },
<<<<<<< HEAD

});

 
  



=======
})
>>>>>>> 906490900c3c3d44e3425ebf9fd9679958e1a2c6

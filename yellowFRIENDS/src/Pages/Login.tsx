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
        
        {/* Logo YellowFRIENDS */}
        <View style={styles.icon_logo}>
          {/* LBL QuemSomos */}
          <Text style={styles.lbl_quemsomos}> Quem somos nós </Text>
          <Image source={require('../images/Logo.png')} />
          {/* Letreiro */}
          <Text style={styles.letreiro} >yellowFRIENDS</Text>
          {/* Slogan */}
          <Text style={styles.slogan} >A tecnologia construida em comunidade</Text>
          {/* Caixa de texto */}
          <TextInput placeholder='Digite seu E-mail aqui' style={styles.input_Login} />
          {/* Caixa de texto */}
          <TextInput placeholder='Senha' style={styles.input_Senha} />
        </View>
      </View>

      

      {/* Buttons */}
        <BotaoLogin tela='TopBarNav'/>
        <BotaoCadastrar tela='Cadastrar-se'/>

      {/* LBL IrSemCadastro */}
      <Text style={styles.lbl_semcadastro}>Ir sem cadastro</Text>
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
    paddingRight: '15%',
    width: 500,
    height: 25,
    textAlign: 'right',
    top: '-5%',
    
    fontWeight: 'bold'
  },
  /* Logo YellowFRIENDS */
  icon_logo: {
    flex: 1,
    top: '18%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  /* Letreiro */
  letreiro: {
    position: 'absolute',
    width: 315,
    color: 'white',
    fontWeight: 'bold',
    top: '90%',
    fontSize: 25,
    textAlign:'center',
  },
  /* Slogan */
  slogan: {
    position: 'absolute',
    top: '110%',
    width: 318,
    fontSize: 12,
    color: 'white',
    textAlign:'center',
  },
  /* Caixa de texto Login */
  input_Login: {
    position: 'absolute',
    width: 286.7,
    height: 53.29,
    top: '130%',
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    justifyContent: 'center',
    textAlign: 'center'
  },
  /* Caixa de texto Senha */
  input_Senha: {
    position: 'absolute',
    width: 286.7,
    height: 53.29,
    top: '165%',
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
    
    top: '82%',
    fontSize: 18,
    textDecorationLine: 'underline',
    textAlign:'center',
    fontWeight: 'bold',
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

});

 
  




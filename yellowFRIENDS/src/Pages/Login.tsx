
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';


export default function Login() {
  return (
    <View style={styles.container}>


      {/* Metade do background amarelo */}
      <View style={styles.viewbackground}>

        {/* LBL QuemSomos */}
        <Text style={styles.lbl_quemsomos}>Quem somos nós</Text>

        {/* Logo YellowFRIENDS */}
        <View style={styles.icon_logo}>
          <Image
            source={require('./src/img/icon_Logo.png')}
          />

          {/* Letreiro */}
          <Image
            source={require('./src/img/yellowFRIENDS.png')}
            style={styles.letreiro}
          />

          {/* Slogan */}
          <Image
            source={require('./src/img/lbl_Slogan.png')}
            style={styles.slogan}></Image>

          {/* Caixa de texto */}
          <TextInput placeholder='Digite seu E-mail aqui' style={styles.input_Login} />

        </View>

        {/* Icon perfil */}
        <Image
          source={require('./src/img/Vector-head.png')}
          style={styles.vector_cabeça}
        />
        <Image
          source={require('./src/img/Vector-body.png')}
          style={styles.vector_corpo}
        />

      </View>

      {/* Buttons */}
      <View style={styles.btn_Login}>

        <TouchableOpacity >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.btn_Cadastro}>

        <TouchableOpacity >
          <Text style={styles.cadastro}>Cadastro</Text>
        </TouchableOpacity>

        <Text style={styles.lbl_semcadastro}>Ir sem cadastro</Text>

      </View>




    </View>


  );
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
  btn_Login: {
    position: 'absolute',
    backgroundColor: '#FFD600',
    borderRadius: 30,
    top: '60%',
    width: 290,
    height: 53,
  },
  login: {
    top: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
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
});

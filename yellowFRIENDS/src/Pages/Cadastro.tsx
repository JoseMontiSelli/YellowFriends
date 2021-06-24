import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Cadastro() {


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {

  }
  return (
    // Inicio do código
    <View style={styles.container}>
      <StatusBar hidden />
      {/* Cabeçario */}
      <View style={styles.cabecario}>
        {/* Titulo cabeçario */}
        <Text style={styles.titulo}>
          Cadastre-se
        </Text>
        {/* Subtitulo cabeçario */}
        <Text style={styles.subtitulo}>
          Só se voce quiser
        </Text>
      </View>
      {/* View das input */}
      <View style={styles.ViewInput}>
        {/* Input seu nome */}
        <TextInput placeholder="Seu nome" style={styles.TextInput} onChangeText={text => setNome(text)} />
        {/* Input sobrenome */}
        <TextInput placeholder="Sobrenome" style={styles.TextInput} onChangeText={text => setNome(text)} />
        {/* Input e-mail */}
        <TextInput placeholder="E-mail" style={styles.TextInput} onChangeText={text => setEmail(text)} />
        {/* Inputs das senhas */}
        <TextInput secureTextEntry={true} placeholder="Senha" style={styles.TextInput} onChangeText={text => setSenha(text)} />
        <TextInput secureTextEntry={true} placeholder="Digite novamente sua senha" style={styles.TextInput} onChangeText={text => setSenha(text)} />
      </View>

      <View style={styles.ViewBotao}>
        <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
         <Text style={styles.textCadastro}>
           Cadastrar-se
         </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30

  },
  TextInput: {
    width: '100%',
    height: 49,
    top: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 30,

  },
  btnCadastro: {
    position: 'absolute',
    width: '60%',
    height: 51,
    left: 99,
    top: 650,
    backgroundColor: '#FFD600',
    borderRadius: 30,
    justifyContent: 'center',

  },
  cabecario: {
    width: '100%',
    height: 132,
    paddingHorizontal: 30,
    top: -30,
    backgroundColor: '#FFE600',
    borderRadius: 8,
    justifyContent: 'flex-start'

  },
  textCadastro: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "bold",

  },
  titulo: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",

  },

  subtitulo: {
    color: 'white',
    fontWeight: "bold"
  },

  ViewInput: {

  },

  ViewBotao:{
    
  }

});


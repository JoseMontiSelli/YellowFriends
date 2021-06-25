import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import Template_BuscarAjuda from './Components/Template_BuscarAjuda';
import DATA from '../Data/DATA_BuscarAjuda';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>
        <StatusBar hidden />

        {/* Pessoas online View */}
        <View style={styles.On}>
          {/* txt pessoas online */}
          <Text style={styles.pesOn}> Pessoas online</Text>
        </View>
        {/* perfil antonio */}
        <View style={styles.perfTonio}>
          {/* foto */}
          <Image source={require('../images/Usuarios/Antonio.jpg')}
            style={styles.imgTonhao}>
          </Image>
          {/* Nome */}
          <Text style={styles.txtTonho}> Antonio Roberto</Text>
          {/* txt Selos */}
          <Text style={styles.Tselos}> Selos:</Text>
          {/* View da flatlist */}
          <View style={styles.selosTonho}>
            {/* Flatiist selos */}
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={DATA}
              keyExtractor={item => item.id}

              renderItem={({ item }) => <Template_BuscarAjuda title={item.title} img={item.img} />}
            />
          </View></View>
        {/* Perfil Dani */}
        <View style={styles.perfDani}>
          {/* Foto de perfil */}
          <Image source={require('../images/Usuarios/Macicleide.jpg')}
            style={styles.imgTonhao}>
          </Image>
          {/* Nome */}
          <Text style={styles.txtDani}>Daniele Pereira</Text>
          {/* txt selos */}
          <Text style={styles.Tselos}> Selos:</Text>
        </View>
        {/* View flatlist */}
        <View style={styles.selosDani}>
          {/* flatlist dos seloss */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            keyExtractor={item => item.id}

            renderItem={({ item }) => <Template_BuscarAjuda title={item.title} img={item.img} />}
          />
        </View>

        {/* view grupo de ajuda */}
        <View style={styles.grupo}>
          {/* txt grupo de ajuda */}
          <Text style={styles.pesOn}> Grupos de ajuda</Text>
        </View>
        {/* View para icon e txt */}
        <View style={styles.gpajuda}>
          {/* Icon do grupo */}
          <Image source={require('../images/icons/IconGrupo.png')}
            style={styles.icongp}></Image>
          {/* numero de pessoas no grupo*/}
          <Text style={styles.numPessoas}>3/8</Text>
          <Text style={styles.PesGP}>pessoas no grupo</Text>
        </View>
        {/* View de texto do grupo e nome */}
        <View style={styles.textGP}>
          {/* Nome do grupo */}
          <Text style={styles.Etec}> Etec Poá</Text>
          {/* Descição do grupo */}
          <Text style={styles.Desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud ex.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
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
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
  On: {
    backgroundColor: '#FFE600',
    height: 20,
    width: 200,
    borderRadius: 10,
    marginTop:10,
    marginLeft: 28,

  },
  pesOn: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 6
  },
  perfTonio: {
    width: 600,
    height: 110,
    marginTop:30,
    backgroundColor: 'white',
    marginLeft: '-17%'

  },
  imgTonhao: {
    width: 110,
    height: 110,
    marginLeft: '18%',
    borderRadius: 100,
  },
  txtTonho: {
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    top: -108,
    marginLeft: '10%'
  },
  Tselos: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    top: -103,
    marginLeft: '-9%',

  },
  selosTonho: {
    top: -135,
    width: 220,
    marginLeft: '50%',
    height: 100,


  },
  perfDani: {
    width: 600,
    height: 110,
    marginTop: '10%',
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: '-17%'
  },
  txtDani: {
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    top: -113,
    marginLeft: '8%'
  },
  selosDani: {
    width: 220,
    marginLeft: '50%',
    height: 100,
    top: -90,
  },
  grupo: {
    backgroundColor: '#FFE600',
    height: 20,
    width: 200,
    borderRadius: 10,
    marginTop: -30,
    marginLeft: 28

  },
  gpajuda: {
    backgroundColor: 'white',
    width: 140,
    height: 110,
    marginTop: 40,
    marginLeft: 30


  },
  icongp: {
    width: 53,
    height: 50,
    marginLeft: 45,
    top: 10,

  },
  numPessoas: {
    fontSize: 22,
    textAlign: 'center',
    top: 7,
    color: '#B1B1B1',
  },
  PesGP: {
    textAlign: 'center',
    fontSize: 12,
    color: '#B1B1B1',
  },
  textGP: {
    width: 200,
    height: 100,
    top: -110,
    marginLeft: '47%',
    backgroundColor: 'white',
    textAlign: 'justify'

  },
  Etec: {
    fontSize: 20,
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
  Desc: {
    textAlign: 'left',
    fontSize: 12,
    color: '#B1B1B1',
    marginLeft: 6
  }
});





export default App;
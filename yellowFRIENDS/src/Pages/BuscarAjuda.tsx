import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {id: 'sajfdhsa',
  title: 'Quarto',
},
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />);
  return (

    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <StatusBar hidden />

      
      <View style={styles.cabeçario}>
        <Text style={styles.titulo}> Buscar ajuda </Text>
      </View>
      <View style={styles.reconhecimento}>
      <Text style={styles.reconhec}> RECONHECIMENTO </Text>
      <TouchableOpacity style={styles.recStyle} activeOpacity={0.5}>
    <Image
     source={require('./img/icon_down.png')}
     style={styles.iconDown}
    />
    </TouchableOpacity>
     
    </View>
      <View style={styles.pef}>
      </View>
      <View style={styles.tric}></View>
      <View style={styles.perf}>
      <Image
        source={require('./img/bia.png')}
        style={styles.imgBia}>
      </Image>
         <Text style={styles.perfil}> Bea Tricoli</Text>
         <View style={styles.vwBi}><Text style={styles.txtBi}>grau eh vida, salve mandrake</Text></View>
         </View>
    <View style={styles.On}>
      <Text style={styles.pesOn}> Pessoas online</Text>
    </View>
    <View style={styles.perfTonio}>
      <Image source={require('./img/Coculuos.png')}
      style={styles.imgTonhao}>
      </Image>
      <Text style={styles.txtTonho}> Antonio Roberto</Text>
      <Text style={styles.Tselos}> Selos:</Text>
      
      <View style={styles.selosTonho}>
      <FlatList
      horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
      </View>
    
    <View style={styles.perfTonio}>
      <Image source={require('./img/Moculos.png')}
      style={styles.imgTonhao}>
      </Image>
      
      <Text style={styles.txtDani}>Daniele Pereira</Text>
      <Text style={styles.Tselos}> Selos:</Text>
      </View>
      <View style={styles.selosDani}>
      <Image source={require('./img/selo_BM.png')}
      style={styles.seloBM}></Image>
        <Image source={require('./img/selo_BC.png')}
      style={styles.seloBC}></Image>
     <Image source={require('./img/selo_Monge.png')}
      style={styles.seloMonge}></Image>
      </View>
      <View style={styles.grupo}>
      <Text style={styles.pesOn}> Grupos de ajuda</Text>
    </View>
    <View style={styles.gpajuda}>
    <Image source={require('./img/icon_Grupo.png')}
      style={styles.icongp}></Image>
      <Text style={styles.numPessoas}>3/8</Text>
      <Text style={styles.PesGP}>pessoas no grupo</Text>
    </View>
    <View style={styles.textGP}>
      <Text style={styles.Etec}> Etec Poá</Text>
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
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 1,
  },
  cabeçario: {
    width: 450,
    height: 98,
    top:-30,
    backgroundColor: '#FFE600',
    borderRadius:5,
  },
  titulo:{
    top: 35,
    color:'black',
    fontSize:20,
    fontWeight: "bold",
  },
  reconhecimento:{
    backgroundColor:'white',
    width:400,
    height:50
  },
  reconhec:{
    fontWeight: "bold",
    fontSize: 28,
    textAlign:'center'
  },
  iconDown:{
    left:350,
    top:-35,
    width:30,
    height:30,
    
  },
  pef:{
    backgroundColor:'#239BCF',
    width: 400,
    height: 120,
    top:26,
    borderRadius: 4,
    left:20
  },
  tric:{
    width: 400,
    height: 115,
    top: -93,
    backgroundColor:'black',
    borderRadius: 4,
    left:17
  },
  perf:{
    width: 395,
    height: 110,
    top: -206,
    backgroundColor:'white',
    borderRadius: 4,
    left:18
  },
  perfil:{
    color:'black',
    fontSize:30,
    fontWeight: "bold",
    textAlign:'center',
    top:-80,
    left: 30
  },
  vwBi:{
    backgroundColor:'#F6F6F6',
    top:-75,
    width:145,
    height:25,
    left:161,
  },
  txtBi:{
    textAlign:'left',
    color:'#B1B1B1',
    fontSize:11
  },
  imgBia:{
    width: 90.57,
    height: 89,
    top: 10,
    left: 20
  },
  On:{
    backgroundColor: '#FFE600',
    height: 20,
    width: 200,
    borderRadius: 10,
    top: -160,
    right: 105
  },
  pesOn:{
    color:'white',
    fontWeight: 'bold',
    left: 10
  },
  perfTonio:{
    width:600,
    height: 110,
    top: -125,
    backgroundColor:'white',
    borderRadius: 4,
    right:80
  },
  imgTonhao:{
    width:95,
    height:95,
    left:115
  },
  txtTonho:{
    color:'black',
    fontSize:20,
    fontWeight: "bold",
    textAlign:'center',
    top:-90,
    left: 30
  },
  Tselos:{
    color:'black',
    fontSize:12,
    textAlign:'center',
    top:-90,
    left: -25,
   lineHeight:15
  },
  selosTonho:{
    top:-90
    
  },
  txtDani:{
    color:'black',
    fontSize:20,
    fontWeight: "bold",
    textAlign:'center',
    top:-90,
    left: 29
  },  
  selosDani:{
    top:-90
  },
  seloBM:{
    width:62,
    height:42,
    top:-90,
    left:260
  },
  seloBC:{
    width:61,
    height:43,
    top:-132,
    left:350
  },
  seloMonge:{
    width:62,
    height:51,
    top:-183,
    left:440
  },
  grupo:{
    backgroundColor: '#FFE600',
    height: 20,
    width: 200,
    borderRadius: 10,
    top: -110,
    right: 105
  },
  gpajuda:{
    backgroundColor:'white',
    width:140,
    height: 100,
    top: -90,
   
  },
  icongp:{
    width:45,
    height: 42,
    left:47,
    top:10,
  
  },
  numPessoas:{
    fontSize: 22,
    textAlign:'center',
    top:7,
    color:'#B1B1B1',
  },
  PesGP:{
    textAlign:'center',
    fontSize:12,
    color:'#B1B1B1',
  },
  textGP:{
    width:240,
    height: 100,
    top: -187,
    left:150,
    backgroundColor:'white'
  
  },
  Etec:{
    fontSize:20,
    textAlign:'left',
    color:'black',
    fontWeight: 'bold',
  },
  Desc:{
    textAlign:'left',
    fontSize:12,
    color:'#B1B1B1',
    left:5
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 26,
    top:-10,
    left:10,
    
  }
  });

  export default App;

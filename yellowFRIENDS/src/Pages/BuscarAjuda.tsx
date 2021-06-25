import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import Template_BuscarAjuda from './Components/Template_BuscarAjuda';
import DATA from '../Data/DATA_BuscarAjuda';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      
<ScrollView style={styles.scrollView}>
      <StatusBar hidden />

      
      <View style={styles.cabecario}>
        <Text style={styles.titulo}> Buscar ajuda </Text>
      </View>
      <View style={styles.reconhecimento}>
      <Text style={styles.reconhec}> RECONHECIMENTO </Text>
      <TouchableOpacity  activeOpacity={0.5}>
    <Image
     source={require('../images/icons/IconDown.png')}
     style={styles.iconDown}
    />
    </TouchableOpacity>
    </View>
      <View style={styles.pef}>
      </View>
      <View style={styles.perf}>
      <Image
        source={require('../images/Usuarios/bia.png')}
        style={styles.imgBia}>
      </Image>
         <Text style={styles.perfil}> Bea Tricoli</Text>
         <View style={styles.vwBi}><Text style={styles.txtBi}>loren ipsun num sei das...</Text></View>
         </View>
    <View style={styles.On}>
      <Text style={styles.pesOn}> Pessoas online</Text>
    </View>
    <View style={styles.perfTonio}>
      <Image source={require('../images/Usuarios/Antonio.jpg')}
      style={styles.imgTonhao}>
      </Image>
      <Text style={styles.txtTonho}> Antonio Roberto</Text>
      <Text style={styles.Tselos}> Selos:</Text>
      
      <View style={styles.selosTonho}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        keyExtractor={item => item.id}

        renderItem={ ({item}) => <Template_BuscarAjuda  title = {item.title} img = {item.img} /> }
      />
      </View></View>
   
    <View style={styles.perfDani}>
      <Image source={require('../images/Usuarios/Macicleide.jpg')}
      style={styles.imgTonhao}>
      </Image>
        <Text style={styles.txtDani}>Daniele Pereira</Text>
      <Text style={styles.Tselos}> Selos:</Text>
      </View>
      <View style={styles.selosDani}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        keyExtractor={item => item.id}

        renderItem={ ({item}) => <Template_BuscarAjuda  title = {item.title} img = {item.img} /> }
      />
  </View> 
  
     
      <View style={styles.grupo}>
      <Text style={styles.pesOn}> Grupos de ajuda</Text>
    </View>
    <View style={styles.gpajuda}>
    <Image source={require('../image/Icons/IconGrupo.png')}
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
  cabecario: {
    width: "100%",
    height: 120,
    top:-30,
    backgroundColor: '#FFE600',
    borderRadius:5,
  },
  titulo:{
    top: 60,
    color:'black',
    fontSize:20,
    fontWeight: "bold",
    
  },
  reconhecimento:{
    backgroundColor:'white',
    width:'80%',
    height:50
  },
  reconhec:{
    fontWeight: "bold",
    fontSize: 28,
    textAlign:'center'
  },
  iconDown:{
    left:'95%',
    top:-35,
    width:30,
    height:30,
    
  },
  pef:{
    
    backgroundColor:'#239BCF',
    width: '89%',
    height: 112,
    borderRadius: 4,
    marginTop:23,
    marginLeft:'5%'
  },
  perf:{
    
    top:-113,
    width: '88%',
    height: 110,
    backgroundColor:'white',
    borderRadius: 4,
    borderColor:'black',
    opacity:5,
    marginLeft:'5%',
    borderWidth:2
    

    },
  perfil:{
    color:'black',
    fontSize:30,
    fontWeight: "bold",
    textAlign:'center',
    marginTop:'-17%',
    marginLeft:'7%'
    
  },
  vwBi:{
    backgroundColor:'#F6F6F6',
    width:145,
    height:25,
    marginLeft:'39%',
    borderWidth:1,
    borderColor:"#e9e9e9"
  },
  txtBi:{
    padding:2,
    color:'#B1B1B1',
    fontSize:11,
  },
  imgBia:{
    width: 90.57,
    height: 89,
    marginTop:'2%',
    marginLeft:'4%'
  },
  On:{
    backgroundColor: '#FFE600',
    height: 20,
    width: 200,
    borderRadius: 10,
    top: -80,
    marginLeft:28
    
  },
  pesOn:{
    color:'white',
    fontWeight: 'bold',
    marginLeft:6
  },
  perfTonio:{
    width:600,
    height: 110,
    top: -50,
    backgroundColor:'white',
    marginLeft:'-17%'
    
  },
  imgTonhao:{
    width:110,
    height:110,
    marginLeft:'18%'
  },
  txtTonho:{
    color:'black',
    fontSize:20,
    fontWeight: "bold",
    textAlign:'center',
    top:-108,
    marginLeft:'10%'
  },
  Tselos:{
    color:'black',
    fontSize:12,
    textAlign:'center',
    top:-103,
    marginLeft:'-9%',

  },
  selosTonho:{
    top:-135,
    width:300,
    marginLeft:'50%',
    height:100,
   

  },
  perfDani:{
      width:600,
      height: 110,
      marginTop:'-2%',
      backgroundColor:'white',
      borderRadius: 4,
      marginLeft:'-17%'
  },
  txtDani:{
    color:'black',
    fontSize:20,
    fontWeight: "bold",
    textAlign:'center',
    top:-113,
    marginLeft:'8%'
  },  
  selosDani:{
    width:300,
    marginLeft:'39%',
    height:100,
    top:-90,
    },
    grupo:{
    backgroundColor: '#FFE600',
    height: 20,
    width: 200,
    borderRadius: 10,
    marginTop:-30,
    marginLeft:28
    
  },
  gpajuda:{
    backgroundColor:'white',
    width:140,
    height: 110,
    marginTop:40,
    marginLeft:30

   
  },
  icongp:{
    width:53,
    height: 50,
    marginLeft:45,
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
    width:200,
    height: 100,
    top: -110,
    marginLeft:'47%',
    backgroundColor:'white',
    textAlign:'justify'
  
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
    marginLeft:6
  }
  });





export default App;
import React from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const {width:widthScreen}= Dimensions.get('screen');
const {height:heightScreen}= Dimensions.get('screen');


export default function KhongHopDong({navigation}) {
  return (
    <SafeAreaView >
    <StatusBar backgroundColor={'#15AD9C'}/>
    <View style={styles.container}>
        <View style={styles.headerButton}>
                        <TouchableOpacity onPress={()=>navigation.goBack('')}
                        style={{marginLeft:10}}>
                            <AntDesign name='left' size={20}/>
                        </TouchableOpacity>
                        <Text style={styles.text}>Theo doi su dung</Text>
        </View>

    

        <View style={{backgroundColor:'#FFFF'}}>
            <Image  style={styles.image} 
            source={require('../image/KhongHopDong.png')}/>
            <Text style={styles.text3}>Ban chua co hop dong</Text>
            <TouchableOpacity  onPress={()=> navigation.navigate('ThemHopDong')} style={styles.button}>
                <Text style={styles.text2}>Them hop dong</Text>
            </TouchableOpacity>
        </View>

    </View>

    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
  backgroundColor:'#15AD9C',
  width: widthScreen,
  height: heightScreen,
  },
  headerButton:{
    
    height:80, 
    borderTopWidth:0.3, 
    borderTopRightRadius:20,
    borderTopStartRadius:20,
    marginTop:30,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  text:{
    marginRight:110,
    fontSize:20,
    fontWeight:'bold',
  },
  text2:{
    marginHorizontal:20,
    fontSize:20,
    fontWeight:'100',
  },
  text3:{
    marginLeft:95,
    marginTop:30,
    marginBottom:-30,
    fontSize:20,
    fontWeight:'normal',
    width: widthScreen,
   
  },
  image:{
      backgroundColor:'#ffff',
      marginHorizontal:10,
      marginBottom:80,
      marginTop:20,
      justifyContent:'center',
      alignItems: 'center',
      width: widthScreen,
      height:250,
      borderRadius:20,
      borderWidth:1,
      borderColor:'#bbbb'
  },
  button:{
    marginHorizontal:10,
    marginTop:50,
    justifyContent:'center',
    alignItems: 'center',
    width: widthScreen,
    backgroundColor:'#15AD9C',
    height:50,
    borderRadius:20,
  },

});


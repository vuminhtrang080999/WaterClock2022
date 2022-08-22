import React from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  Dimensions,
  TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const {width:widthScreen}= Dimensions.get('screen');
const {height:heightScreen}= Dimensions.get('screen');


export default function UocTinhTienNuoc({navigation}) {
  return (
    <SafeAreaView >
    <StatusBar backgroundColor={'#15AD9C'}/>
    <View style={styles.container}>
      <View style={styles.headerButton}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home1')}
        style={{marginLeft:10}}>
            <AntDesign name='left' size={20}/>
        </TouchableOpacity>
            <Text style={styles.text}>Lich su su dung</Text>
      </View>

      <View style={{backgroundColor:'#fff'}}>

      <View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('KhongHopDong')}
        style={styles.icon}>
            <AntDesign style={{marginLeft:10}} name='exclamationcircle' size={20}/>
            <Text style={{marginRight:240}}>Nguong canh bao</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('KhongHopDong')}
        style={styles.icon}>
            <AntDesign style={{marginLeft:10}} name='exclamationcircle' size={20}/>
            <Text style={{marginRight:250}}>Bieu do su dung</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('KhongHopDong')}
        style={styles.icon}>
            <AntDesign style={{marginLeft:10}} name='exclamationcircle' size={20}/>
            <Text style={{marginRight:250}}>Uoc tinh tieu thu</Text>
        </TouchableOpacity>
      </View>
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
    marginTop:20,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  text:{
    marginRight:120,
    fontSize:20,
    fontWeight:'bold',
  },
  icon:{
    marginTop:10, 
    width:widthScreen, 
    backgroundColor:'#43CC9C' , 
    height:50, 
    borderRadius:10,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },


});


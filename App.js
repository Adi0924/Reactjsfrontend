/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet,
  View,
  Text,
} from 'react-native';

const App=()=>
  {
  return(
    <View style ={styles.container}>

      <View style ={{backgroundColor:"skyblue",borderRadius:10,padding:10,width:"100%",marginBottom:20}}>
      <Text styles ={{fontSize:20,fontweight:"bold"}}>Email</Text>
      </View>
      <View style ={{backgroundColor:"skyblue",borderRadius:10,padding:10,width:"100%",marginBottom:20}}>
      <Text Style={{frontSize:20,fontweight:"bold"}}>Password</Text>
      </View>
      <View style ={{flexDirection:"row",justifyContent:"space-between"}}>
        <View style={styles.new1}>
        <Text style ={{fontWeight:"bold"}}>Reset</Text>
        </View>
        <View style={styles.new2}>
          <Text style={{fontWeight:"bold"}}>Confirm</Text>
        </View>  
      </View>
      </View>
)
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:10,
    alignItems: 'center',
    justifyContent:'center',
  },
  new1:{
    backgroundColor:"red",
    padding:10,
    marginRight:20
  },
  new2:{
    backgroundColor:"chartreuse",
  padding:10,
    
  }
});

export default App;
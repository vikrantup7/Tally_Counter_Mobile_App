import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { register } from '../../../API';
import { showToastMessage } from '../../../constants';

const Registration = ({navigation}) => {

  const [username ,setUsername] = useState();
  const [email, setEmail] = useState();
  const [ password, setPassword] = useState();
  const [cnfpassword, setCnfpassword] = useState()

  const onClickRegistration=()=>{
    if(password === cnfpassword && email, username){
      var raw = JSON.stringify({
      "username": username,
      "email": email,
      "password": password
    });
    register(raw).then(response=>{
      console.log(response);
      showToastMessage("Account created Successfully")
      navigation.navigate("Login")
    })
    }
    else{
      showToastMessage("Password doesn't match")
    }
  }
  
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/patt.png')}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex:1,alignItems: 'center',marginTop:70}}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/logo.png')}
          style={{marginVertical: 20,height:40,width:'70%'}}
        />

         <Text style={{fontSize:20, fontWeight:'500',color:'#000000',paddingBottom:15}}>Let's Create Account </Text>


        <TextInput
           placeholder="User Name"
           value={username}
           onChangeText={(text)=> setUsername(text)}
           style={styles.Textinput} />

        <TextInput
          placeholder="Email ID"
          value={email}
           onChangeText={(text)=> setEmail(text)}
          style={styles.Textinput}
        />

        <TextInput
          placeholder="Password"
          value={password}
           onChangeText={(text)=> setPassword(text)}
          style={styles.Textinput}
        />

        <TextInput
          placeholder="Confirm password"
          value={cnfpassword}
          onChangeText={(text)=>setCnfpassword(text)}
          style={styles.Textinput}
        />


<TouchableOpacity onPress={()=> onClickRegistration()}
   style={{paddingTop:50}}>
<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={{borderRadius: 15,paddingVertical:10,paddingHorizontal:20}}>
           <Text style={{fontSize:14, color:'#fff'}}>
             Create Account
          </Text>
       </LinearGradient>
</TouchableOpacity>
 <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
          <Text style={{fontSize:14}}>Already have an account? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text style={{fontSize:14,color:'blue'}}>Login</Text>
          </TouchableOpacity>
       </View>
      </View>     
      </ScrollView>



    </ImageBackground>
  );
};

export default Registration;

const styles = StyleSheet.create({
  Textinput: {
    height: 45,
    width: '90%',
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    elevation: 5,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    fontSize:14,
    color:'#fff',
    fontWeight:'500'
  }
});

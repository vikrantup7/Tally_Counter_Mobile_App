import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { setTokenFunction } from '../../../redux/Actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../API';
import { showToastMessage } from '../../../constants';
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {

  const [visible, setvisible] = useState(true);
  const [UserName, setUserName] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    console.log(UserName,password);
      if(UserName, password){
        var raw = JSON.stringify({
        "email": UserName,
        "password": password
      });
      login(raw).then(async(response)=>{
        console.log(response);
        if(response?.token){
          showToastMessage("Loggedin Successfully")
          var token = response.token;
          var decoded = jwt_decode(token);
          await AsyncStorage.setItem("userId", decoded.userId)
          dispatch(setTokenFunction(true))
        }
        else{
          showToastMessage("User not found")
        }
      })
      }
      else{
        showToastMessage("Both fields are required")
      }
  };


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

         <Text style={{fontSize:20, fontWeight:'500',color:'#000000',paddingBottom:15}}>Welcome back</Text>

        <TextInput
          placeholder="Email ID"
          value={UserName}
          onChangeText={(text)=>setUserName(text)}
          style={styles.Textinput}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text)=>setPassword(text)}
          style={styles.Textinput}
        />


<TouchableOpacity onPress={()=> handleLogin()}
   style={{paddingTop:50}}>
<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={{borderRadius: 15,paddingVertical:10,paddingHorizontal:40}}>
           <Text style={{fontSize:16, color:'#fff',fontWeight:'500'}}>
             Login
          </Text>
       </LinearGradient>
</TouchableOpacity>
 <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
          <Text style={{fontSize:14}}>Already have an account? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Registration_screen")}>
            <Text style={{fontSize:14,color:'blue'}}>SignUp</Text>
          </TouchableOpacity>
       </View>
      </View>     
      </ScrollView>



    </ImageBackground>
  );
};

export default Login;

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

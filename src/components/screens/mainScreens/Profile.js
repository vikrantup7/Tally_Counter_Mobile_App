import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { Colors, Fonts } from '../../../constants'

const Profile = () => {
  return (
    <ImageBackground
    style={{flex: 1}}
    source={require('../../../assets/images/patt.png')}>
      <View style={{marginHorizontal:10,marginVertical:10}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Image resizeMode='contain' source={require('../../../assets/images/logo.png')}/>
        <Icon name='user' type='ant-design' color={Colors.white} style={{backgroundColor:Colors.blue,borderRadius:6,padding:4}}/>
        </View>

        <Text style={{marginTop:50,alignSelf:'center',fontWeight:'600',fontSize:20}}>Stats</Text>

        {
          [1,2,3,4,5].map(item=>{
            return(
              <Card containerStyle={{borderRadius:12}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>Cars</Text>
                <Text>24</Text>
                </View>
              </Card>
            )
          })
        }


      </View>
  </ImageBackground>
  )
}

export default Profile

const styles = StyleSheet.create({})
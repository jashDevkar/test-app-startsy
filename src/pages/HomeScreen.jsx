import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'

const HomePage = () => {
  const navigation = useNavigation();
  return (
  
      <View style={{flex:1, justifyContent:'center',alignItems:'center',gap:10}}>
        <Pressable onPress={()=>navigation.navigate("Details")}>
          <Text>Move to detail Screen</Text>
        </Pressable>
                <Pressable onPress={()=>navigation.navigate("Profile")}>
          <Text>Profile page</Text>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate("Group")}>
          <Text>Move to Group Details</Text>
        </Pressable>


        <Pressable onPress={()=>navigation.navigate("Price")}>
          <Text>Price page</Text>
        </Pressable>
        
      

        
      </View>
    // </SafeAreaView>
  )
}

export default HomePage
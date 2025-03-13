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
        <Pressable onPress={()=>navigation.navigate("Jobs")}>
          <Text>Go to Job Posting Screen</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Profile")}>
          <Text>Profile page</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Group")}>
          <Text>Group details screen page</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Community")}>
          <Text>Go to community page</Text>
        </Pressable>
      </View>
    // </SafeAreaView>
  )
}

export default HomePage
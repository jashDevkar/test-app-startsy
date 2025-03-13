import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from 'expo';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/pages/HomeScreen';
import JobsPostedScreen from '../src/pages/Jobs/JobsPostedScreen';
import DetailsScreen from '../src/pages/DetailsScreen';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import * as SystemUI from "expo-system-ui"
import ProfilePage from '../src/pages/ProfilePage'
import GroupDetailsScreen from '../src/GroupDetails/GroupDetailsScreen';
import ApplicantsList from '../src/pages/Jobs/ApplicantsList'
import CommunityPage from '../src/pages/Community/CommunityPage.jsx'
import CommunityDetail from "../src/pages/Community/CommunityDetail.jsx";

const Stack = createStackNavigator();
export default function Page() {
  return (



    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen}  />
      <Stack.Screen name="Jobs" component={JobsPostedScreen}    />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Group" component={GroupDetailsScreen} />
      <Stack.Screen name="Applicants" component={ApplicantsList} />
      <Stack.Screen name="Community" component={CommunityPage} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
    </Stack.Navigator>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

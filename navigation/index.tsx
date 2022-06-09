import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/main-screen";
import { View, Text, HStack } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur'
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import QuranScreen from "../screens/quran-screen";
import HadithScreen from "../screens/hadith-screen";
import AboutScreen from "../screens/about-screen";
import Glass from "../components/glass";
import Tab from "../components/tab";


const Tabs = createBottomTabNavigator()


export default function App() {
  return (
    <View flex={1}>
      <Tabs.Navigator
        initialRouteName="Prayer"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, iconName }: any) => {

            if (route.name === 'Prayer') {
              iconName = focused
                ? 'time'
                : 'time-outline';

            } else if (route.name === 'Quran') {
              iconName = focused
                ? 'ios-book'
                : 'ios-book-outline'
            } else if (route.name === 'Hadith') {
              iconName = focused
                ? 'checkmark-done-circle'
                : 'checkmark-done-circle-outline'
            } else if (route.name === 'About') {
              iconName = focused
                ? 'help-circle'
                : 'help-circle-outline'
            }
            return (
              <Tab route={route} size={size} color={color} iconName={iconName} focused={focused} />
            );
          },
          tabBarActiveTintColor: '#7F6E68',
          tabBarInactiveTintColor: '#000',
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 15,
            right: 15,
            elevation: 0,
            borderRadius: 25,
            height: 65,
          },
          tabBarItemStyle: {
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          },
          headerShown: false,
          tabBarBackground: () => (
            <Glass />
          ),

        })}
      >
        <Tabs.Screen name="Prayer" component={MainScreen} />
        <Tabs.Screen name="Quran" component={QuranScreen} />
        <Tabs.Screen name="Hadith" component={HadithScreen} />
        <Tabs.Screen name="About" component={AboutScreen} />
      </Tabs.Navigator>
    </View>
  )
}



import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/main-screen";
import { View, Text } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur'
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import QuranScreen from "../screens/quran-screen";
import HadithScreen from "../screens/hadith-screen";
import AboutScreen from "../screens/about-screen";
import Glass from "../components/glass";


const Tabs = createBottomTabNavigator()

interface Props {
  route: any,
  iconName: any,
}

export default function App() {
  return (
    <View flex={1}>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, iconName }: any) => {

            if (route.name === 'Home') {
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
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',
          tabBarLabel: ({ focused }) => {
            return <Text style={{ fontSize: 12, fontWeight: '600', color: '#fff' }}>{focused ? route.name : ""}</Text>
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 15,
            right: 15,
            elevation: 0,
            borderRadius: 25,
            height: 65,
            alignItems: 'center',
            justifyContent: 'center'
          },
          tabBarItemStyle: {
            borderRadius: 100,
            flexDirection: "row",

          },
          headerShown: false,
          tabBarBackground: () => (
            <Glass />
          ),

        })}
      >
        <Tabs.Screen name="Home" component={MainScreen} />
        <Tabs.Screen name="Quran" component={QuranScreen} />
        <Tabs.Screen name="Hadith" component={HadithScreen} />
        <Tabs.Screen name="About" component={AboutScreen} />
      </Tabs.Navigator>
    </View>
  )
}



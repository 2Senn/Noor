import 'react-native-gesture-handler'
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/main-screen";
import { View } from "native-base";
import QuranScreen from "../screens/quran-screen";
import HadithScreen from "../screens/hadith-screen";
import AboutScreen from "../screens/about-screen";
import Glass from "../components/glass";
import Tab from "../components/tab";
import PrayerDetails from '../screens/prayer-details';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '../screens/test-screen';

const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

function App() {

  return (
    <View flex={1}>
      <Tabs.Navigator
        initialRouteName="الصلاة"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, iconName }: any) => {

            if (route.name === 'الصلاة') {
              iconName = focused
                ? 'time'
                : 'time-outline';

            } else if (route.name === 'القران') {
              iconName = focused
                ? 'ios-book'
                : 'ios-book-outline'
            } else if (route.name === 'الحديث') {
              iconName = focused
                ? 'checkmark-done-circle'
                : 'checkmark-done-circle-outline'
            } else if (route.name === 'تعريف') {
              iconName = focused
                ? 'help-circle'
                : 'help-circle-outline'
            }
            return (
              <Tab route={route} size={size} color={color} iconName={iconName} focused={focused} />
            );
          },
          tabBarActiveTintColor: '#FEEAE6',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 15,
            right: 15,
            elevation: 10,
            borderRadius: 25,
            height: 65,
            shadowColor: "#000",
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 1,
            shadowRadius: 12,
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
        <Tabs.Screen name="تعريف" component={AboutScreen} />
        <Tabs.Screen name="الحديث" component={HadithScreen} />
        <Tabs.Screen name="القران" component={QuranScreen} />
        <Tabs.Screen name="الصلاة" component={MainScreen} />
      </Tabs.Navigator>
    </View>
  )
}

function prayStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={App} />
      <Stack.Screen name="PrayDetails" component={PrayerDetails} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  )
}

export default prayStack



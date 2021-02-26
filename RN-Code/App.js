import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Modules
import Main from './Components/Main'
import Brief from './Components/Brief'

const Stack = createStackNavigator(); 

function LogoTitle() {
  return (
    <Image
      style={{ width: 150, height: 40, resizeMode: 'stretch' }}
      source={{uri: 'https://www.w3schools.com/css/paris.jpg'}}
    />
  );
}

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#CCCCCC',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Main" 
        component={Main} 
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />
      <Stack.Screen 
        name="UserProfile" 
        component={Brief} 
        options={{ title: 'User Profile'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {

  const send = {
    "gender": "female",
    "name": {
    "title": "Miss",
    "first": "مریم",
    "last": "نجاتی"
    },
    "location": {
    "street": {
    "number": 9066,
    "name": "شهید سرتیپ نامجو"
    },
    "city": "ارومیه",
    "state": "سیستان و بلوچستان",
    "country": "Iran",
    "postcode": 75134,
    "coordinates": {
    "latitude": "27.2475",
    "longitude": "158.5935"
    },
    "timezone": {
    "offset": "+4:00",
    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
    }
    },
    "email": "mrym.njty@example.com",
    "login": {
    "uuid": "ab3ae717-b38f-4504-89ab-f24a17638f72",
    "username": "sadzebra257",
    "password": "netscape",
    "salt": "oI9vdsaL",
    "md5": "47cdedf726ef5c5a3e4087a0458c4b27",
    "sha1": "603b713d85f9f4d8463c3aa294b381fb9d3aff25",
    "sha256": "2de52ba827535ac94fb38cb24d665cc63ef7e0a02eb7777267d1403c896b931d"
    },
    "dob": {
    "date": "1960-02-23T01:22:12.707Z",
    "age": 61
    },
    "registered": {
    "date": "2014-04-03T12:43:09.556Z",
    "age": 7
    },
    "phone": "043-25941218",
    "cell": "0970-638-5097",
    "id": {
    "name": "",
    "value": null
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/women/9.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
    },
    "nat": "IR"
  }
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{ title: 'Circle'}}
          // initialParams={{ setUserOne: setUser }}
        />
        <Stack.Screen 
          name="Brief" 
          component={Brief} 
          options={{ title: 'Profile', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
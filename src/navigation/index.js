import React, { Component } from 'react';
import { View, Text ,Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    home,
    list,
 } from "../view";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Tabs = () =>(
    <Tab.Navigator 
    tabBarOptions={{
        inactiveBackgroundColor:'#222f3e',
        activeBackgroundColor:'#222f3e',
        activeTintColor:'#fff'
    }}
    >
      <Tab.Screen name="Home" component={home}  
      />
      <Tab.Screen name="List" component={list}  />
    </Tab.Navigator>
);

const Router = () => (
    
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                    name="YouTube"
                    component={Tabs}
                    options={{
                        
                        headerStyle:{
                            backgroundColor:'#222f3e'
                            
                        },
                        headerTintColor:'#fff',
                        headerLeft: () => (
                            
                            <Image
                            style={{
                                height:40,
                                width:40,
                                marginHorizontal:10

                            }}
                            source={require('../assets/icons/youtube.png')}/>
                        )
                        
                    }}
                    
                    />
                    <Stack.Screen 
                    name="list"
                    component={list}
                    />
                </Stack.Navigator>
            </NavigationContainer>
);

export default Router;

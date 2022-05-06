import React from 'react';
import MainPages from './pages/MainPages';
import Contacts from './pages/Contacts';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack:any = createNativeStackNavigator();


export default function Navigate(){
        return <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name="MainPages"
                            component={MainPages}
                            options={{title: 'Главная'}}
                        />
                        <Stack.Screen 
                            name="CompleteTask"
                            component={Contacts}
                            options={{title: 'выполненные задачи'}}
                        />
                    </Stack.Navigator>
        </NavigationContainer>
        }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FB from './screens/fb'
import IN from './screens/in'

export default function App() {
  return (
    <AppContainer/>
  );
}

const tabNavigator = createBottomTabNavigator({
  Facebook : FB,
  Instagram : IN
})

const AppContainer = createAppContainer(tabNavigator);

const styles = StyleSheet.create({

});

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { AddContact } from '../../AddContact';
import { SplashScreen } from '../../SplashScreen';
import ViewContacts from '../../ViewContacts';
import {AppStackParamList} from './app-nav';

const AppNavigatorOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={AppNavigatorOptions}
        />
        <Stack.Screen
          name="ViewContacts"
          component={ViewContacts}
          options={AppNavigatorOptions}
        />
         <Stack.Screen
          name="AddContact"
          component={AddContact}
          options={AppNavigatorOptions}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AppStack;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
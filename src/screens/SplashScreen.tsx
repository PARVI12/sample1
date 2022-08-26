import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {AppStackNav} from './navigation/stacks/app-nav';

export const SplashScreen: React.FC<AppStackNav<'SplashScreen'>> = ({
  navigation,
}) => {
  const [alignsecond, setAlignsecond] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {     
      navigation.navigate('ViewContacts');
    }, 4000);
  }, []);

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setAlignsecond(true);
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);
 

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
        }}
        style={{width: 100, height: 100}}
      />
      {!alignsecond ? null : (
        <View style={{margin: 10}}>
          <Text style={{color: '#114998', fontSize: 20, fontWeight: 'bold'}}>
            Welcome to Splash Screen
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 40,
    justifyContent: 'center',
  },
});

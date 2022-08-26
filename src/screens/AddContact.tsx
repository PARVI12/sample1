import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {AppStackNav} from './navigation/stacks/app-nav';
import DropDownPicker from 'react-native-dropdown-picker';

import Feather from 'react-native-vector-icons/Feather';

export const AddContact: React.FC<AppStackNav<'AddContact'>> = ({
  navigation,
}) => {
  const handleBackClickButton = () => {
    navigation.navigate('ViewContacts');
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleAddClickButton = () => {};
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Personal', value: 'Personal'},
    {label: 'Office', value: 'Office'},
  ]);

  return (
    <View style={styles.MainContainer}>
      <View style={{height: 200, backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.textContact}>New Contact</Text>
          <Image
            style={styles.tinyLogoprofile}
            source={{
              uri: 'https://i.ibb.co/hmbFzcq/profile.jpg',
            }}
          />
        </View>
      </View>
      <View style={styles.inputextview}>
        <TextInput
          style={styles.inputText}
          placeholder="FirstNamer"
          placeholderTextColor="black"
          keyboardAppearance="default"></TextInput>
        <TextInput
          style={styles.inputText}
          placeholder="Phone Number"
          placeholderTextColor="black"
          keyboardAppearance="default"></TextInput>

        <DropDownPicker
          placeholder="Select"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <TouchableOpacity
              onPress={handleCheck}
              style={styles.touchableContainer}>
              <View style={styles.mainContainer}>
                <View style={styles.containar}>
                  {checked ? (
                    <View style={styles.checkedView}>
                      <Feather name="check" color="white" size={15} />
                    </View>
                  ) : (
                    <View style={styles.unCheckedView} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 5}}>
            <Text style={styles.iswhatsapp}>Is Whatsapp</Text>
          </View>
        </View>

        <View style={styles.buttonStyles}>
          <Button title="Back Button" onPress={handleBackClickButton} />
          <Button title="Add Contact" onPress={handleAddClickButton} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  tinyLogoprofile: {
    marginTop: 10,
    width: '25%',
    height: '60%',
    borderRadius: 50,
  },
  textContact: {
    fontSize: 28,
    letterSpacing: 0.41,
    lineHeight: 41,
    color: 'black',
    fontWeight: '400',
    marginTop: 10,
  },
  inputText: {
    fontSize: 17,
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b5b3ac',
  },
  inputextview: {
    marginLeft: 5,
    marginTop: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRadius: 10,
    borderBottomColor: '#b5b3ac',
  },
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 50,
  },
  iswhatsapp: {
    fontSize: 20,
    color: 'black',
  },

  checkedView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 15,
    height: 15,
    padding: 5,
    borderRadius: 20,
  },
  unCheckedView: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {flexDirection: 'row', alignItems: 'center'},
  containar: {
    width: 25,
    height: 25,
    padding: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    marginVertical: 5,
  },
  touchableContainer: {marginVertical: 10},
});

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppStackNav} from './navigation/stacks/app-nav';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export const ViewContacts: React.FC<AppStackNav<'ViewContacts'>> = ({
  navigation,
}) => {
  const handleClick = () => {
    Alert.alert('this is ok');
  };

  const contactlist = [
    {
      title: 'A',
      data: [
        {
          id: 1,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
        {
          id: 2,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
        {
          id: 3,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
        {
          id: 4,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
      ],
    },

    {
      title: 'B',
      data: [
        {
          id: 5,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
        {
          id: 6,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
        {
          id: 7,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
        {
          id: 8,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
      ],
    },

    {
      title: 'C',
      data: [
        {
          id: 9,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
        {
          id: 10,
          name: 'Parvati',
          phoneNumber: '8429171010',
          type: 'personal',
          isWhatsapp: 'True',
          profilePicture: '',
        },
      ],
    },
  ];

  return (
    <View style={styles.MainContainer}>
      <View style={{height: 200, backgroundColor: 'white'}}>
        <View style={styles.headerView}>
          <Text style={styles.groupText}>Groups</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddContact')}>
            <Text style={{fontSize: 30, color: 'blue'}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerContactView}>
          <Text style={styles.headerContacts}>Contacts</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.inputText}
              placeholder="Search"
              placeholderTextColor="black"
              returnKeyType="search"
              keyboardAppearance="default"
              onChangeText={text => {}}></TextInput>
          </View>
        </View>
        <View
          style={{
            height: 80,
            backgroundColor: 'white',
            flexDirection: 'row',
          }}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://lh3.googleusercontent.com/a-/AFdZucqhJnMjExxaHUrY45afNcCcy3ziAxmYKKBrwUnt=s96-c',
            }}
          />
          <View
            style={{
              alignItems: 'flex-start',
              marginLeft: 15,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={styles.tinyLogoprofile}
              source={{
                uri: 'https://i.ibb.co/hmbFzcq/profile.jpg',
              }}
            />
            <View>
              <Text style={styles.profileText}>Parvati Yadav</Text>
              <Text style={styles.cardText}>My Card</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{marginTop: 30, padding: 15, marginLeft: 10}}>
        <SectionList
          sections={contactlist}
          renderItem={({item}) => (
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                borderBottomColor: '#b5b3ac',
                borderBottomWidth: 1,
                padding: 2,
                marginBottom: 2,
              }}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://i.ibb.co/hmbFzcq/profile.jpg',
                }}
              />
              <View style={{padding: 5, marginLeft: 5, width: '100%'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text>{item.phoneNumber}</Text>
              </View>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={{borderBottomColor: '#b5b3ac', borderBottomWidth: 1}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
                {section.title}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  tinyLogoprofile: {
    marginTop: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  headerView: {
    // height: 44,
    marginVertical: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupText: {
    fontSize: 18,
    color: 'blue',
  },
  headerContactView: {
    marginTop: 10,
    marginLeft: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerContacts: {
    fontSize: 34,
    letterSpacing: 0.41,
    lineHeight: 41,
  },
  searchBox: {
    marginTop: 12,
    height: 37,
    borderRadius: 12,
    backgroundColor: '#b5b3ac',
    alignItems: 'center',
    width: '95%',
  },
  inputText: {
    fontSize: 17,
    letterSpacing: 0.41,
    lineHeight: 22,
    width: '90%',
    padding: 10,
  },
  avatar: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  profileText: {
    fontSize: 20,
    letterSpacing: 0.38,
    marginTop: 25,
    marginLeft: 10,
    color: 'black',
  },
  cardText: {
    fontSize: 13,
    letterSpacing: 0.38,
    lineHeight: 18,
    marginLeft: 10,
  },
});

export default ViewContacts;

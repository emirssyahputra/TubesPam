import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button,ToastAndroid,TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOURS, Items} from '../database/Database';


const Verif = ({navigation}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    };
  
    const handleConfirmButtonPress = () => {
      // Logic to handle confirmation button press
    };
  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundDark,
                padding: 12,
                backgroundColor: COLOURS.backgroundLight,
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
        <Text style={styles.title}>Verifikasi Pembayaran</Text>
        <View style={{ width: 60 }}></View>
      </View>
      <View style={styles.imageContainer}>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        )}
        <View style={styles.buttonContainer}>
          <Button
            title="Pick an image"
            onPress={pickImage}
            style={styles.button}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Confirm"
          disabled={!selectedImage}
          onPress={() => checkOut()}
          style={
            selectedImage
              ? styles.confirmButtonEnabled
              : styles.confirmButtonDisabled
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    imageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 10,
    },
    buttonContainer: {
      marginTop: 20,
      alignSelf: 'stretch',
    },
    button: {
      backgroundColor: '#003f5c',
      padding: 10,
      borderRadius: 5,
      minWidth: 150,
    },
    confirmButtonEnabled: {
      backgroundColor: '#003f5c',
      padding: 10,
      borderRadius: 5,
      minWidth: 150,
    },
    confirmButtonDisabled: {
      backgroundColor: '#CCCCCC',
      padding: 10,
      borderRadius: 5,
      minWidth: 150,
    },
    backButton: {
      marginLeft: 10,
    },
  });

export default Verif;
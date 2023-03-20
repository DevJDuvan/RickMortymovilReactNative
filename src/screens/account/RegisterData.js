import React from 'react';
import {useState} from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from 'react-native';

const image = {
  uri: 'https://www.nicepng.com/png/detail/23-234376_white-play-png-play-video-icon-white.png',
};
export default function RegisterData() {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <Text style={styles.btnText}>*MAXIMO 3 MINUTOS DE REPRODUCCION*</Text>
        <ImageBackground
          style={styles.container}
          source={image}
          resizeMode="cover">
          <TouchableOpacity onPress={() => alert('agregar video')}>
            <Text>AGREGAR VIDEO DE PRESENTACION</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => alert('foto')}>
        <Text style={styles.btnText}>AGREGAR FOTO DE PERFIL</Text>
      </TouchableOpacity>
      <View style={styles.optionsTwo} px={10}>
        <TouchableOpacity
          style={styles.btnReady}
          onPress={() => alert('hhjjh')}>
          <Text>LISTO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#000000',
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    fontSize: 50,
    lineHeight: 60,
    marginBottom: 100,
  },
  btnReady: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#52A0CC',
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: '#EAEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 60,
    width: 120,
    height: 120,
    position: 'absolute',
    left: 120,
    top: 200,
    zIndex: 1,
    color: 'black',
  },
  btnText: {
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
  },
  options: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    backgroundColor: '#EAEFEF',
  },
  optionsTwo: {
    justifyContent: 'flex-end',
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
  },
});

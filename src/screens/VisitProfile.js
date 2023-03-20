import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
} from 'react-native';
const image = {
  uri: 'https://previews.123rf.com/images/ammentorp/ammentorp1704/ammentorp170400250/77014787-mujer-haciendo-un-video-para-su-blog-sobre-cosm%C3%A9ticos-joven-con-art%C3%ADculos-cosm%C3%A9ticos-en-la-tabla-de-.jpg',
};
const imageProfile = {
  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
};
const imageInstagram = {
  uri: 'https://previews.123rf.com/images/ammentorp/ammentorp1704/ammentorp170400250/77014787-mujer-haciendo-un-video-para-su-blog-sobre-cosm%C3%A9ticos-joven-con-art%C3%ADculos-cosm%C3%A9ticos-en-la-tabla-de-.jpg',
};
export default function VisitProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.ContainerVideoUser}>
        <ImageBackground
          style={styles.container}
          source={image}
          resizeMode="cover">
          <TouchableOpacity onPress={() => alert('agregar video')}>
            {/* <Icon name="home" size="10" color="yellow.100" /> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnImgProfile}
            onPress={() => alert('foto')}>
            <Image style={styles.stretch} source={imageProfile} />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.ContainerInfoUser}>
        <View style={styles.ContainerTextNameUser}>
          <Text style={styles.TextNameUser}>WANDERLEY PEREZ</Text>
        </View>
        <View style={styles.ContainerFollowersUser}>
          <View style={styles.ViewFollowersUser}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                textAlign: 'center',
                fontSize: 18,
                color: 'black',
              }}>
              240
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
              }}>
              SIGUIENDO
            </Text>
          </View>
          <View style={styles.ViewFollowersUser}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                textAlign: 'center',
                fontSize: 18,
                color: 'black',
              }}>
              240
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
              }}>
              SEGUIDORES
            </Text>
          </View>
          <View style={styles.ViewFollowersUser}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                textAlign: 'center',
                fontSize: 18,
                color: 'black',
              }}>
              240
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
              }}>
              VISTAS
            </Text>
          </View>
        </View>
        <View style={styles.SectionEditProfile}>
          <TouchableOpacity
            onPress={() => alert('seguir')}
            style={styles.btnEditProfile}
            activeOpacity={0.6}>
            <Text style={{color: 'white'}}>seguir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('instagram')}>
            <Image style={styles.IconImg} source={imageInstagram} />
          </TouchableOpacity>
          <Image style={styles.IconImg} source={imageProfile} />
          <Image style={styles.IconImg} source={imageProfile} />
        </View>
      </View>

      <View style={styles.ContainerTabs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ContainerVideoUser: {
    backgroundColor: '#080202',
    height: '45%',
    justifyContent: 'flex-start',
  },
  btnImgProfile: {
    backgroundColor: '#EAEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 60,
    width: 120,
    height: 120,
    position: 'relative',
    left: 120,
    top: 110,
    zIndex: 1,
    color: 'black',
  },
  ContainerInfoUser: {
    height: '45%',
  },
  ContainerTextNameUser: {
    marginVertical: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextNameUser: {},
  ContainerFollowersUser: {
    marginTop: -20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  SectionEditProfile: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderRadius: 15,
  },
  btnEditProfile: {
    borderRadius: 15,
    backgroundColor: '#CDCCCB',
    color: '#FFFCFC',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    width: '60%',
    margin: '2%',
  },
  stretch: {
    borderWidth: 3,
    borderRadius: 60,
    width: 118,
    height: 118,
    resizeMode: 'stretch',
  },
  ContainerTabs: {
    backgroundColor: '#EAEFEF',
    height: '10%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  IconImg: {
    marginTop: 10,
    height: 40,
    width: 40,
    borderWidth: 3,
    borderRadius: 60,
    resizeMode: 'stretch',
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'back',
  },
  containerP: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  textWithShadow:{
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
},
  coverImage: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderRadius: 16,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 16,
 backgroundColor: 'orange',
 shadowColor: '#000',
 shadowOffset: {
   width: 0,
   height: 1,
 },
 shadowOpacity: 0.22,
 shadowRadius: 2.22,
 elevation: 3
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
   
 shadowColor: '#000',
 shadowOffset: {
   width: 0,
   height: 1,
 },
 shadowOpacity: 0.22,
 shadowRadius: 2.22,
 elevation: 5
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white'
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
  cardShadow: {
    borderRadius: 30,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 60,
      height: 60,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
   },
   cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
   }
});

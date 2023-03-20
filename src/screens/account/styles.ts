import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: 335,
  },
  ContainerVideoUser: {
    backgroundColor: 'white',
    height: 353,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  btnImgProfile: {
    position: 'relative',
    left: 137,
    top: 260,
  },
  ContainerInfoUser: {
    height: '45%',
  },
  ContainerTextlabelUser: {
    marginVertical: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerFollowersUser: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  btnEditProfile: {
    backgroundColor: '#CDCCCB',
    color: '#FFFCFC',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    margin: '2%',
  },
  stretch: {
    borderRadius: 46,
    width: 86,
    height: 94,

  },
  stylePresentation: {


  },
  ContainerScrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 2,
  },
  containerSeccionEdit: {
    borderWidth: 0.5, borderColor: '#C0C0C0', marginTop: 12, marginHorizontal: 10,
  },
  PresableButtonPlay: {
    height: 42
    , width: 42,
    borderRadius: 50,
    position: 'absolute',
    top: 10, left: 300, justifyContent: 'center',
    alignItems: 'center', backgroundColor: 'white',
  },
});


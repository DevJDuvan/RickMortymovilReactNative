import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  btn: {
    backgroundColor: '#52A0CC',
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  btnText: {
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
  forgot: {
    fontFamily: 'Nunito-Regular',
    margin: 10,
    color: '#000000',
  },
  textForRegister: {
    fontFamily: 'Nunito-Regular',
    color: '#000000',
  },

  // MODAL
  centeredView: {
    // flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

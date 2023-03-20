import {StyleSheet} from 'react-native';

export const styleTitle = StyleSheet.create({
  container: {},
  input: {
    color: '#52A0CC',
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',

    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
  },
  icon: {position: 'relative', height: 24, width: 24, top: '-38%', left: '89%'},

  inputError: {
    borderWidth: 1,
    borderColor: 'red',
  },
  errors: {
    color: 'red',
    paddingLeft: 20 / 2,
  },
  label: {
    justifyContent: 'center',
    width: '19%',
    backgroundColor: 'white',
    position: 'relative',
    top: 10,
    left: 8,
    zIndex: 1,
  },
});

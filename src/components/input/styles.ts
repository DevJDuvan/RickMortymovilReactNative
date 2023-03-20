import { StyleSheet } from 'react-native';
import { paddingApp, theme } from '../../theme';

const {colors, spacing, fontFamily } = theme;

export  const stylesInput = StyleSheet.create({
  container: {
    borderColor: 'red', marginBottom: spacing.marginApp / 2,
  },
  label: {
    paddingHorizontal: 6,
    alignSelf: 'baseline',
    textAlign: 'center',
    position: 'relative',
    top: 8,
    left: 8,
    zIndex: 1,
  },
  input: {
    // height:45,
    color: colors.text,
    paddingHorizontal: paddingApp / 2,
    fontFamily: fontFamily.text,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
  },
  icon: {
    position: 'absolute',
    right:0,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems:'center',

  },

  inputError: {
    borderWidth: 1,
    borderColor: 'red',
  },
  errors: {
    color: 'red',
    paddingLeft: 20 / 2,
  },

});

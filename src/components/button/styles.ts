import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

const {
  fontFamily: {textBtn},
} = theme;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  containerPressed: {opacity: 0.9},
  shadow: {elevation: 8},
  text: {textTransform: 'uppercase', fontFamily: textBtn},
});

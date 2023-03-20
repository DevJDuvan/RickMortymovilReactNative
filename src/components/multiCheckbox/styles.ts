import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

const {spacing} = theme;
export const stylesRibbon = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
  },
  content: {flex: 1, alignItems: 'center'},
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.paddingApp,
  },
  buttonDefault: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: -24,
  },
});

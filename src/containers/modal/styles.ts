import { StyleSheet } from 'react-native';
import { marginApp, paddingApp, theme } from '../../theme';

const { } = theme;

export const styles = StyleSheet.create({
  normal: { margin: marginApp / 2 },
  sticky: {
    position: 'absolute',
    alignSelf: 'center',
    left: marginApp,
    right: marginApp,
  },
  bottom: { bottom: 0, marginBottom: 0 },
  top: { top: 0, marginTop: 0 },
  shadow: {
    elevation: 5,
  },
  btnClose: {
    position: 'absolute',
    padding: paddingApp / 4,
    right: 0,
    margin: marginApp / 2,
    zIndex:9999,
  },
});

import {StyleSheet} from 'react-native';

export const stylesBreadcrumb = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separador: {
    marginHorizontal: 15,
    backgroundColor: 'white',
    width: 2,
  },
  notification: {
    position: 'absolute',
    height: 8,
    width: 8,
    borderRadius: 4,
    right: -8,
    top: -4,
    backgroundColor: '#930909',
  },
});

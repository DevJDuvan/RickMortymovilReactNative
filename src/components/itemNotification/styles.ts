import { StyleSheet } from 'react-native'

export const stylesItem = StyleSheet.create({
  Container: {
   paddingVertical:6,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  ContainerComponets: {
    flexDirection: 'row',
   paddingVertical:4,
  },
  ContainerTexts:{
    flexDirection:'column',
    marginLeft:8 
  },
  ContainerButtons: {
    marginHorizontal:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
paddingVertical:2
  },
  Text: {fontSize:10, fontWeight: 'bold', color: 'white' , textTransform: 'uppercase' },
  textTP:{textTransform:'uppercase'},
  textDescription:{fontWeight:'normal',textTransform: 'none'},
  ButtonLeft: {},
  ButtonRight: {}
})
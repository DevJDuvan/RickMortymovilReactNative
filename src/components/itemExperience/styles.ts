import { StyleSheet } from 'react-native'

export const stylesItem = StyleSheet.create({
  Container: {
   paddingBottom:6,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom:-10
  },
  ContainerComponets: {
    alignItems:'center',
    flexDirection: 'row'
  },
  ContainerTexts:{
    flexDirection:'column',
    marginLeft:8 ,
    marginRight:30

  },
  ContainerButtons: {
    marginHorizontal:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
paddingVertical:2
  },
  Text: {fontSize:10, fontWeight: 'bold', color: 'white' , textTransform: 'uppercase' },
  textTP:{fontSize:10,textTransform:'uppercase'},
  textDescription:{fontWeight:'normal',textTransform: 'none',fontSize:10},
  ButtonLeft: {},
  ButtonRight: {}
})
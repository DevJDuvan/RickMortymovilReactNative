import React from 'react'
import { FlexStyle, Text, View } from 'react-native'
import { stylesItem } from './styles'
import {Avatar} from '../../components'
import { theme } from '../../theme';

type ItemNotificationProps = FlexStyle & {
  colorText?:string,
  imgs:string|any,
  ButtonLeft?: JSX.Element,
  ButtonRight?: JSX.Element,
  labeltipodenotifiacion: string,
  labelnombreusuario: string,
  labeldescription: string,
  labelotro: string,
}
const ItemNotification: React.FC<ItemNotificationProps> = ({ ButtonLeft, ButtonRight,
   labeltipodenotifiacion, labelnombreusuario, labeldescription, labelotro,imgs,colorText='black'}) => {
 
  return (
    <View style={stylesItem.Container}>
      <View style={stylesItem.ContainerComponets}>
        <View style={{ justifyContent: 'center' }}>
          <Avatar onPress={() => { console.log('e') }} size='small' img={imgs} />
        </View>
        <View style={{ marginLeft:8,paddingRight:12}}>
          <Text style={[stylesItem.textTP, { color: colorText }]}>{labeltipodenotifiacion}</Text>
          <Text style={[stylesItem.Text, { color: colorText }]}>{labelnombreusuario},
            <Text style={[stylesItem.textDescription, { color: colorText }]}> {labeldescription + ':'}
              <Text style={{ fontWeight: 'bold' }}>{labelotro}</Text></Text></Text>
        </View>
      </View>
      <View style={stylesItem.ContainerButtons}>
        {ButtonLeft ?? null}
        {ButtonRight ?? null}
      </View>
    </View>
  )
}

export default ItemNotification
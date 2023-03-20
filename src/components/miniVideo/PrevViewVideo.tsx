import React, {useMemo} from 'react';
import {FlexStyle, ImageBackground, Pressable, View} from 'react-native';
import {theme} from '../../theme';
import { Icon } from '../icon';
import { Text } from '../text';
type  PrevViewVideoProps = FlexStyle & {
  size?: 'small' | 'normal' | 'big';
  label?: string;
  color?: string | any;
  img?:string;
 iconVideo?:boolean;
 onPress?: () => void
};
const {colors} = theme;
const PrevViewVideo: React.FC<PrevViewVideoProps> = ({
  color: backgroundColor = colors.badge,
  size = 'small',
  label,
  img,
  iconVideo,
  onPress,
  ...rest
}) => {

  const stylesBadge = useMemo(() => {
    if (size === 'small') {return {height: 12, width: 12, fontSize: 9};}
    if (size === 'normal') {return { height: 105, width: 93, fontSize: 10 };}
    return { height: 105, width: 93, fontSize: 16 };
  }, [size]);

  return (
    <ImageBackground
   source={require('../../assets/img/rectangle.png')}
      style={{
        width: stylesBadge.width,
        height: stylesBadge.height,
        marginTop:2,
        marginRight:2
      }}
      {...rest}>
        <View style={{flex:1}}>
        <Pressable onPress={onPress} style={{justifyContent:'center',marginTop:2,marginLeft:2}}>
          {iconVideo&&<Icon  color='white' name='play-circle-outline'></Icon>} 
        </Pressable>
        </View>
        <View style={{flex:1,justifyContent:'flex-end'}}>
          <View style={{flexDirection:'row',marginHorizontal:2}}>
          <View style={{
          opacity:0.7,
          position: 'absolute',
          backgroundColor:'black', bottom: 0, right: 0, top: 0, left: 0
        }}></View>
          <Pressable style={{justifyContent:'center',marginHorizontal:1}}  >
          <Icon size={12}  color='white' name='eye-outline'></Icon>
          </Pressable>
      <Text  fontWeight='normal'
      
        style={{
          fontSize: stylesBadge.fontSize,
          color: 'white',
        }}>
      255k
      </Text>
      </View>
      </View>
    </ImageBackground>
  );
};
export default PrevViewVideo;

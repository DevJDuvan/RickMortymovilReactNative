import React from 'react';
import { View, Image} from 'react-native';
import styles from './styles';
import {
  Text
 } from '../../components';
 import StepCurrent from '../../assets/img/Ellipse.png';
 import StepDone from '../../assets/img/stepdone.png';
 import StepNext from '../../assets/img/Ellipse.png';

import { theme } from '../../theme';
const { colors } = theme
const lineNext = colors.gray;
const lineDone = colors.primary;

type StepsProps = {
  step: number,
  totalSteps: number
};

const Steps: React.FC<StepsProps> = ({ step, totalSteps }) => {
  return (
    <View style={{flexDirection:'row'}}>
    <View style={styles.navigator}>
      {[...Array(totalSteps - 1)].map((e, i) => {
        return (
          <React.Fragment key={i}>
            <Image
              source={
                i + 1 < step ? StepDone : i + 1 == step ? StepCurrent : StepNext
              }
              style={styles.stepIcon}
              resizeMode="contain"
            />
            <View
              style={styles.lineSteps}
              backgroundColor={i + 1 <= step - 1 ? lineDone : lineNext}>
            </View>
          </React.Fragment>
        );
      })}
      <Image
        style={styles.stepIcon}
        resizeMode="contain"
        source={
          step == totalSteps? 
             StepCurrent
            : step > totalSteps
              ? StepDone
              : StepNext
        }
      />
    </View>
    <View style={{ paddingTop:4, justifyContent:'space-between', marginLeft:4 
           }}>
              <Text  style={{marginBottom:1}} size='xSmall' color='#8E8E8E' >Solicitud enviada</Text>
              <Text  style={{marginBottom:1}} size='xSmall' color='#8E8E8E' >Se ha visualizado tu perfil</Text>
              <Text  style={{marginBottom:1}} size='xSmall' color='#8E8E8E' >Se ha descargado tu CV</Text>
              <Text  style={{marginBottom:1}} size='xSmall' color='#8E8E8E' >Se contactaron con tigo</Text>
              
              
              </View>
    </View>
  );
};

export default Steps;

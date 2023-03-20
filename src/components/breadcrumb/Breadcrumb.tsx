import React, {useState} from 'react';
import {View} from 'react-native';
import {TextLink} from '../textLink';
import {stylesBreadcrumb} from './styles';

type TitleProps = {
  items: {
    label: string;
    notification: boolean;
    onPress?: () => void;
  }[];
};

const Breadcrumb: React.FC<TitleProps> = ({items}) => {
  const [itemActive, setItemActive] = useState(0);
  return (
    <View>
      <View style={stylesBreadcrumb.container}>
        {items.map(({label, notification, onPress}, i) => (
          <View  style={{marginHorizontal:12}} key={i}>
            <View>
              <TextLink
                size="big"
                underlineHide={i !== itemActive}
                onPress={() => {
                  setItemActive(i);
                  onPress && onPress();
                }}
                opacity={i === itemActive ? 1 : 0.5}
                color="white">
                {label}
              </TextLink>
              {notification ? (
                <View style={stylesBreadcrumb.notification} />
              ) : null}
            </View>
            {items.length - 1 !== i ? (
              <View style={stylesBreadcrumb.separador} />
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
};
export default Breadcrumb;

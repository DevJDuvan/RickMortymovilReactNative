import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { InfoVideo } from '../../entities';
import { Text } from '../text';
import { Icon } from '../icon';
import { styles, stylesBtnVerMas } from './style';
import Box from '../../containers/box/Box';
import { CompanyHeader } from '../../screens/components';

type InfoVideoProps = InfoVideo;

const BtnVerMas: React.FC<{ state:boolean,onPress: () => void }> = ({ onPress,state }) => {

  return (
    <Pressable onPress={onPress} style={stylesBtnVerMas.container}>
      <Icon name={state ? 'chevron-up' : 'chevron-down'} size={18} color="white"  style={{ elevation: 3 }} />
      <Text size="xSmall" color="white" style={{elevation:3}}>
        {state ? ' Ver más' : 'ver menos'}
      </Text>
    </Pressable>
  );
};

const InFoVideo: React.FC<InfoVideoProps> = ({ business, job }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [follow, setFollow] = useState(business.follow);

  const showMore = () => {
    setIsHidden(!isHidden);
  };
  return (
    <View style={styles.container}>
      {!isHidden && <BtnVerMas state={isHidden} onPress={showMore} />}
      <CompanyHeader follow={follow} setFollow={setFollow} company={business} />
      <View style={styles.bodyPost}>
        <Text color="white" textTransform="uppercase" size="xSmall" fontWeight="bold">
          {job.title}
        </Text>
        <Text size="xSmall" color="white" opacity={0.9} style={styles.text}>
          {isHidden ? job.shortDescription : job.description}
        </Text>
        {!isHidden && (
          <View style={{ marginTop: 10 }}>
            {job.benefits.map((item, i) => (
              <Text
                key={i}
                color="white"
                size="xSmall"
                opacity={0.9}
                textTransform="uppercase"
                fontWeight="semibold"
              >
                {item.label}:{' '}
                <Text color="white" size="xSmall" opacity={0.9}>
                  {item.content}
                </Text>
              </Text>
            ))}
            <Box padding={0} marginTop={30} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="map-marker-outline" marginEnd={5} />
              <Text
                color="white"
                size="xSmall"
                opacity={0.9}
              >
                {job.tipeJob} - {job.ubigeo.state} - {job.ubigeo.country}
              </Text>
            </Box>
          </View>
        )}

        {isHidden && <BtnVerMas state={isHidden} onPress={showMore} />}
      </View>
    </View>
  );
};

export default InFoVideo;

import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import Video, { LoadError, VideoProperties } from 'react-native-video';
import { Animate } from '../animate';
import { Icon } from '../icon';
import { styles } from './styles';


type VideoPlayerProps = VideoProperties & { height: number, repeat?: boolean };

const VideoPLayer: React.FC<VideoPlayerProps> = ({ source, repeat = true, height, ...rest }) => {
  const onBuffer = () => { };
  const videoError = (e: LoadError) => { console.log({ e }); };

  const [isPlay, setIsPlay] = useState(true);
  const playPause = () => {
    setIsPlay(!isPlay);
  };

  return (

    <Pressable onPress={playPause} >
      <View style={[styles.container, { height: height }]}>
        {isPlay &&
          <View style={styles.btnPlay}>
            <Animate animation="zoomIn" duration={150}>
              <Icon name="play" color="#ffffff88" size={150} />
            </Animate>
          </View>
        }
        <Video
          source={source}
          // controls
          repeat={repeat}
          // ref={ref => {
          //   this.player = ref;
          // }} // Store reference
          paused={isPlay}
          onBuffer={onBuffer} // Callback when remote video is buffering
          onError={videoError} // Callback when video cannot be loaded
          style={[styles.backgroundVideo]}
          {...rest}
        />
      </View>
    </Pressable>

  );
};

export default React.memo(VideoPLayer);

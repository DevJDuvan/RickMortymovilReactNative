import React , {useState,useEffect}from 'react';
import {FlatList, View, useWindowDimensions,Image,Text} from 'react-native';
import {styles} from './styles';
import {heightTab} from '../../theme';
import {dataMain} from '../../JSON/main';
import {LinearGradient} from 'react-native-linear-gradient'
import {
  Breadcrumb,
  VideoPlayer,
  Ribbon,
  ButtonGroup,
  InfoVideo,
} from '../../components';
import {Box, Modal} from '../../containers';
import {useVideo} from '../../context/video';
import {GetData} from './../../services/auth';


const items = [
  {label: 'Siguiendo', notification: false, onPress: () => {console.log('vaina')}},
  {label: 'Feeds', notification: false, onPress: () => {}},
  {label: 'Otros', notification: true, onPress: () => {}},
];

type VideoHomeProps = {
  Data: { id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    location: {
      name: string,
      url: string
    },
    image: string,
    episode: [
     any
   
    ],
    url: string,
    created:string
  };
 
};
const VideoHome: React.FC<VideoHomeProps> = ({Data}) => {
  const {height} = useWindowDimensions();

  return (
    <View style={{borderBottomColor:'black',borderBottomWidth:2}}>
      <View style={styles.container}>
      <View style={styles.avatarContainer}>
  
      <View
        style={{
          marginTop:10,
          borderRadius: 100,
          shadowColor: "Black",
          shadowOpacity: 0.5,
          shadowRadius: 8,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "white",
            overflow: "hidden",
            elevation: 10,
            alignContent:'center'
          }}
        >
          <Image
            source={{
              width: 100,
              height: 100,
              uri: Data.image,
            }}
          />
        </View>
      </View>
        <Text style={[styles.name, styles.textWithShadow]}>{Data.name}</Text>
        
      </View>
      <Box>
        <View>
      </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Estado:</Text>
          <Text style={styles.infoValue}>{Data.status}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Especie:</Text>
          <Text style={styles.infoValue}>{Data.species}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Tipo:</Text>
          <Text style={styles.infoValue}>{Data.type==""?"Natural":Data.type}</Text>
        </View>
       
      </Box>
    </View>
  
  

    </View>
  );
};

const Home = () => {
  const [DataApi, setDataApi] = useState([]);
  const slidesRef = React.useRef(null);
  const {onCreate, setOnCreate} = useVideo();
  useEffect(() => {
    const dataProvincias = async () => {
      const data = await GetData()
      if (data) {
        setDataApi(data.results)
      } else { 
        console.log('error') 
      };
    }
    dataProvincias();
  })
  return (
    <View style={styles.container}>
      <FlatList
         pagingEnabled
         bounces={true}
        data={DataApi}
        ref={slidesRef}
        // scrollToOverflowEnabled
         scrollEventThrottle={3}
         keyExtractor={(item, index) => 'key'+index}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <VideoHome Data={item} />}
      />



    </View>
  );
};



export default Home;

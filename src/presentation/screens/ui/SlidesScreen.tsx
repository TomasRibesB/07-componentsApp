import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {Button} from '../../components/ui/Button';
import {useContext, useRef, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';
import { globalStyles } from '../../../config/theme/theme';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [currentSlideIndex, setcurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setcurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({
        index,
        animated: true,
    });
  };

  const { colors } = useContext(ThemeContext);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        style={{backgroundColor: colors.background}}
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        onScroll={ev => {
          onScroll(ev);
        }}
      />

      {currentSlideIndex === items.length - 1 ? (
        <Button
          text="Finalizar"
            onPress={() => navigation.goBack()}
          styes={{
            position: 'absolute',
            bottom: 60,
            right: 30,
            width: 100,
          }}
        />
      ) : (
        <Button
          text="Siguiente"
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
          styes={{
            position: 'absolute',
            bottom: 60,
            right: 30,
            width: 100,
          }}
        />
      )}
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({item}: SlideItemProps) => {
  const {width} = useWindowDimensions();
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.cardBackground,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
        width: width,
      }}>
      <Image
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
        source={item.img}
      />
      <Text
        style={[globalStyles.title, {color: colors.primary, marginTop: 20}]}>
        {item.title}
      </Text>
      <Text
        style={{
          color: colors.text,
          marginTop: 20,
        }}>
        {item.desc}
      </Text>
    </View>
  );
};

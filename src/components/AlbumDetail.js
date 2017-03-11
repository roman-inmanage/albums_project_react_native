import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
const { title, artist, thumbnail_image, image, url } = album;
const { thumbnailStyle, textStyle, textContainer, imageContainer, bottomImageStyle } = styles;
  return (
      <Card>
        <CardSection>
        <View style={imageContainer}>
            <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainer}>
            <Text style={textStyle}>{title}</Text>
            <Text>{artist}</Text>
        </View>
        </CardSection>
        <CardSection>
            <Image style={bottomImageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button onBuyPressed={() => Linking.openURL(url)}>
              Buy now
          </Button>
        </CardSection>
      </Card>
  );
};

const styles = {
  bottomImageStyle: {
    height: 200,
    flex: 1,
    width: 0
  },
  imageContainer: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;

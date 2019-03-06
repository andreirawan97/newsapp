//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Animated,
} from 'react-native';
// @ts-ignore
import noImage from '../images/noImage.jpg';

// create a component
type Props = {
  newsTitle: string;
  newsDescription: string;
  newsThumbnail: string;
  newsUrl: string;
  goToNewsDetail: ({title, url}: {title: string; url: string}) => void;
};

class NewsCard extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  animatedValue: any;
  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0.95,
      friction: 90,
      tension: 100,
    }).start();
  }

  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start();
  }

  render() {
    const animatedStyle = {
      transform: [{scale: this.animatedValue}],
    };
    let {
      newsTitle,
      newsDescription,
      newsThumbnail,
      newsUrl,
      goToNewsDetail,
    } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        onPress={() => goToNewsDetail({title: newsTitle, url: newsUrl})}
      >
        <Animated.View style={[styles.container, animatedStyle]}>
          <View style={styles.imageContainer}>
            <Image
              source={newsThumbnail ? {uri: newsThumbnail} : noImage}
              style={{resizeMode: 'contain', height: 100, width: 170}}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.title} numberOfLines={3}>
                {newsTitle}
              </Text>
            </View>
            <View style={styles.descriptionTextContainer}>
              <Text numberOfLines={3}>
                {newsDescription ? newsDescription : 'No Description'}
              </Text>
            </View>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'silver',
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 2,
  },
  textContainer: {
    flex: 2,
  },
  titleTextContainer: {
    flex: 1,
    marginBottom: 9,
  },
  descriptionTextContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

//make this component available to the app
export default NewsCard;

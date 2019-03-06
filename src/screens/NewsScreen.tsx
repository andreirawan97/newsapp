//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, WebView, Alert} from 'react-native';
import {NavigationParams, NavigationScreenProps} from 'react-navigation';
import {TERTIARY_COLOR} from '../constants/color';
import {DEVICE_WIDTH} from '../constants/device';

// create a component

type Props = NavigationScreenProps & {};
class NewsScreen extends Component<Props> {
  static navigationOptions = ({navigation}: NavigationParams) => {
    return {
      title: navigation.getParam('title'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: TERTIARY_COLOR,
        elevation: 0,
        borderBottomWidth: 0,
      },
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: this.props.navigation.getParam('url')}}
          style={{width: DEVICE_WIDTH}}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
});

//make this component available to the app
export default NewsScreen;

//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

import {PRIMARY_COLOR} from '../constants/color';
import ListItemNewsSource from '../components/ListItemNewsSource';

type Props = NavigationScreenProps & {};

// create a component
class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: 'white',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              backgroundColor: PRIMARY_COLOR,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text style={styles.header}>News Source</Text>
          </View>

          <ListItemNewsSource goToNewsListScreen={this._goToNewsListScreen} />
        </ScrollView>
      </View>
    );
  }

  _goToNewsListScreen = (name: string) => {
    this.props.navigation.navigate('NewsList', {name});
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

//make this component available to the app
export default HomeScreen;

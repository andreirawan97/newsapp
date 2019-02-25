//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';

import {SECONDARY_COLOR} from '../constants/color';
import {NavigationScreenOptions, NavigationParams} from 'react-navigation';
import {State, NewsSource, News} from '../Type';

// create a component
type Props = NavigationScreenOptions & {
  currentNewsSource: NewsSource;
  newsList: Array<News>;
  fetchNewsList: (source: string) => void;
};

class NewsListScreen extends Component<Props> {
  static navigationOptions = ({navigation}: NavigationParams) => {
    return {
      title: navigation.getParam('name', 'Err'),
      headerStyle: {
        backgroundColor: SECONDARY_COLOR,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerLeft: (
        <View style={{marginLeft: 20}}>
          <Button
            onPress={() => navigation.goBack()}
            title="Back"
            color="#fff"
          />
        </View>
      ),
    };
  };

  componentDidMount() {
    this.props.fetchNewsList(this.props.currentNewsSource.id);
  }

  componentWillUnmount() {}

  render() {
    let {newsList} = this.props;
    return (
      <View style={styles.container}>
        {newsList.map((news: News, i) => (
          <Text key={i}>{news.title}</Text>
        ))}
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

function mapStateToProps(state: State) {
  let {newsState} = state;
  let {currentNewsSource, newsList} = newsState;

  return {
    newsList: newsList,
    currentNewsSource: currentNewsSource,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchNewsList: (source: string) => {
      dispatch({type: 'FETCH_NEWS_LIST_REQUEST', payload: source});
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsListScreen);

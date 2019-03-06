//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {NavigationScreenProps, NavigationParams} from 'react-navigation';

import {SECONDARY_COLOR} from '../constants/color';
import {State, NewsSource, News} from '../Type';
import NewsCard from '../components/NewsCard';

// create a component
type Props = NavigationScreenProps & {
  currentNewsSource: NewsSource;
  newsList: Array<News>;
  fetchNewsList: (source: string) => void;
  clearNewsList: () => void;
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
      headerTintColor: 'white',
      // headerLeft: (
      //   <View style={{marginLeft: 20}}>
      //     <Button
      //       onPress={() => navigation.goBack()}
      //       title="Close"
      //       color="#fff"
      //     />
      //   </View>
      // ),
    };
  };

  componentDidMount() {
    this.props.fetchNewsList(this.props.currentNewsSource.id);
  }

  componentWillUnmount() {
    this.props.clearNewsList();
  }

  render() {
    let {newsList} = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {newsList.map((news: News, i) => (
            <NewsCard
              key={i}
              newsTitle={news.title}
              newsDescription={news.description}
              newsThumbnail={news.urlToImage}
              newsUrl={news.url}
              goToNewsDetail={this._goToNewsDetail}
            />
          ))}
        </View>
      </ScrollView>
    );
  }

  _goToNewsDetail = ({title, url}: {title: string; url: string}) => {
    this.props.navigation.navigate('NewsDetail', {
      title: title,
      url: url,
    });
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
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
    clearNewsList: () => {
      dispatch({type: 'CLEAR_NEWS_LIST'});
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsListScreen);

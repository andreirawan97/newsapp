import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';
import {State, NewsSource} from '../Type';
import ListItem from './ListItem';
import {NavigationScreenProps} from 'react-navigation';
import {PRIMARY_COLOR} from '../constants/color';

type Props = {
  newsSource: Array<NewsSource>;
  fetchNewsSource: () => void;
  goToNewsListScreen: (name: string) => void;
};

class ListItemNewsSource extends Component<Props> {
  componentDidMount() {
    this.props.fetchNewsSource();
  }

  render() {
    let {newsSource} = this.props;
    return (
      <View style={styles.container}>
        {newsSource.length === 0 ? (
          <ActivityIndicator size="large" style={{marginTop: 50}} />
        ) : (
          newsSource.map((source: NewsSource, i) => (
            <ListItem
              key={i}
              id={source.id}
              title={source.name}
              goToNewsListScreen={this.props.goToNewsListScreen}
            />
          ))
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'whitesmoke',
  },
});

function mapStateToProps(state: State) {
  let {newsState} = state;
  let {newsSource} = newsState;
  return {
    newsSource: newsSource,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchNewsSource: () => {
      dispatch({type: 'FETCH_NEWS_SOURCE_REQUEST'});
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListItemNewsSource);

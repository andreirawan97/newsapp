import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
// @ts-ignore
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {State, NewsSource} from '../Type';

type Props = {
  id: string;
  title: string;
  updateSource: (source: NewsSource) => void;
  goToNewsListScreen: (name: string) => void;
};

class ListItem extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  animatedValue: any;
  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

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

    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        onPress={this._goToNewsList}
      >
        <Animated.View style={[styles.list, animatedStyle]}>
          <Text style={styles.text}>{this.props.title}</Text>
          <Ionicons name="ios-arrow-forward" size={20} style={styles.chevron} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  _goToNewsList = () => {
    let source = {id: this.props.id, name: this.props.title};

    this.props.updateSource(source);
    this.props.goToNewsListScreen(source.name);
  };
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 15,
    borderBottomWidth: 0.8,
    borderBottomColor: 'silver',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 17,
  },
  chevron: {
    color: 'grey',
  },
});

function mapDispatchToProps(dispatch: any) {
  return {
    updateSource: (source: NewsSource) => {
      dispatch({type: 'UPDATE_NEWS_SOURCE', payload: source});
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(ListItem);

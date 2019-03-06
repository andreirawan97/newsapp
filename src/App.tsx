import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Root} from 'native-base';
import {Provider} from 'react-redux';

import createDataStore from './configs/createDataStore';
const store = createDataStore();
import HomeScreen from './screens/HomeScreen';
import NewsListScreen from './screens/NewsListScreen';
import {StatusBar} from 'react-native';
import NewsScreen from './screens/NewsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    NewsList: NewsListScreen,
    NewsDetail: NewsScreen,
  },
  {
    mode: 'card',
  },
);

const AppContainer = createAppContainer(AppNavigator);

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <StatusBar barStyle="light-content" />
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}

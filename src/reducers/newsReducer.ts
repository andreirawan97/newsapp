import {NewsState, Action} from '../Type';

export default function newsReducer(newsState: NewsState, action: Action) {
  const initialState: NewsState = {
    newsSource: [],
    currentNewsSource: {id: '', name: ''},
    newsList: [],
  };

  if (!newsState) {
    return initialState;
  }

  switch (action.type) {
    case 'FETCH_NEWS_SOURCE_SUCCESS': {
      return {
        ...newsState,
        newsSource: action.payload,
      };
    }
    case 'UPDATE_NEWS_SOURCE': {
      return {
        ...newsState,
        currentNewsSource: action.payload,
      };
    }
    case 'FETCH_NEWS_LIST_SUCCESS': {
      return {
        ...newsState,
        newsList: action.payload,
      };
    }
    default: {
      return newsState;
    }
  }
}

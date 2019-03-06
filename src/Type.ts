// State
export type NewsSource = {
  id: string;
  name: string;
};

export type News = {
  title: string;
  url: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
};

export type NewsState = {
  newsSource: Array<NewsSource>;
  newsList: Array<News>;
  currentNewsSource: NewsSource;
};

export type State = {
  newsState: NewsState;
};

// Action
export type Action =
  | {
      type: 'FETCH_NEWS_SOURCE_REQUEST';
    }
  | {
      type: 'FETCH_NEWS_SOURCE_SUCCESS';
      payload: Array<NewsSource>;
    }
  | {
      type: 'FETCH_NEWS_LIST_REQUEST';
      payload: string;
    }
  | {
      type: 'FETCH_NEWS_LIST_SUCCESS';
      payload: Array<News>;
    }
  | {
      type: 'UPDATE_NEWS_SOURCE';
      payload: string;
    }
  | {
      type: 'CLEAR_NEWS_LIST';
    };

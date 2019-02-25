import {call, put, takeLatest} from 'redux-saga/effects';

import {newsSource, newsList} from '../API';
import {Action, NewsSource, News} from '../Type';

export default function* newsSagaWatcher(): any {
  yield takeLatest('FETCH_NEWS_SOURCE_REQUEST', fetchNewsSource);
  yield takeLatest('FETCH_NEWS_LIST_REQUEST', fetchNewsList);
}

function* fetchNewsSource(action: Action) {
  if (action.type === 'FETCH_NEWS_SOURCE_REQUEST') {
    let response = yield call(newsSource);
    let arrayOfNewsSource: Array<NewsSource> = response.sources;

    if (arrayOfNewsSource) {
      yield put({
        type: 'FETCH_NEWS_SOURCE_SUCCESS',
        payload: arrayOfNewsSource,
      });
    }
  }
}

function* fetchNewsList(action: Action) {
  if (action.type === 'FETCH_NEWS_LIST_REQUEST') {
    let response = yield call(newsList, action.payload);
    let arrayOfNewsList: Array<News> = response.articles;

    if (arrayOfNewsList) {
      yield put({type: 'FETCH_NEWS_LIST_SUCCESS', payload: arrayOfNewsList});
    }
  }
}

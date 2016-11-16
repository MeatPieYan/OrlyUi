import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import actions from '../action';
import pageAction from '../action/pageAction';
import photoAction from '../action/photoAction';

export function* loadIndex() {
    try{
      const logo = yield call(pageAction.getLogo);
      yield put(actions.fetchedLogo(logo.data[0]));
      const photos = yield call(photoAction.fetchIndexPhotos);
      yield put(actions.fetchedPhoto(photos.data));
      const catagory = yield call(pageAction.getCatagories);
      yield put(actions.fetchedCatagory(catagory.data));
    } catch (err) {
      yield put(actions.fetchedError(err));
    }
}

export function* loadCatagory(action){
  try{
    const logo = yield call(pageAction.getLogo);
    yield put(actions.fetchedLogo(logo.data[0]));
    const catagory = yield call(pageAction.getCatagories);
    yield put(actions.fetchedCatagory(catagory.data));
    const photos = yield call(photoAction.fetchPhotosByYear, action.payload);
    yield put(actions.fetchedPhotoByYear(photos.data));
  } catch (err) {
    yield put(actions.fetchedError(err));
  }
}

export default function*() {
    yield [
        takeLatest('LOAD_INDEX', loadIndex),
        takeLatest('LOAD_CATAGORY', loadCatagory)
    ];
}

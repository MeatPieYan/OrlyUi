import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import actions from '../action';
import pageAction from '../action/pageAction';
import photoAction from '../action/photoAction';

export function* doFetchCatagory() {
  const catagory = yield call(pageAction.getCatagories);
  // console.log(catagory);
  yield put(actions.fetchedCatagory(catagory.data));
}

export function* doFetchPhoto(){
  const photos = yield call(photoAction.fetchIndexPhotos);
  yield put(actions.fetchedPhoto(photos.data));
}

export function* doFetchLogo(){
  const logo = yield call(pageAction.getLogo);
  yield put(actions.fetchedLogo(logo.data[0]));
}

export function* loadIndex() {
    // yield put('FETCH_PHOTO');
    // yield put('FETCH_LOGO');
    // yield put('FETCH_CATAGORY');

    const logo = yield call(pageAction.getLogo);
    yield put(actions.fetchedLogo(logo.data[0]));
    const photos = yield call(photoAction.fetchIndexPhotos);
    yield put(actions.fetchedPhoto(photos.data));
    const catagory = yield call(pageAction.getCatagories);
    // console.log(catagory);
    yield put(actions.fetchedCatagory(catagory.data));
}

export default function*() {
    yield [
        takeLatest('FETCH_PHOTO', doFetchPhoto),
        takeLatest('FETCH_LOGO', doFetchLogo),
        takeLatest('FETCH_CATAGORY', doFetchCatagory),
        takeLatest('LOAD_INDEX', loadIndex)
        // fork(watchPlaySpeech),
    ];
}

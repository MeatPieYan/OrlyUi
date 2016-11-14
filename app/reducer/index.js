import { combineReducers } from 'redux';

import photo from './photoReducer';
import page from './pageReducer';

export default combineReducers({
	photo,
	page
});

export default function reducer(state={
	photo: [],
	remainPhoto: -1
}, action) {
	switch(action.type) {
		case "FETCH_PHOTO": {
			return {
				...state
			};
		}
		case "FETCHED_PHOTO": {
			return {
				...state,
				photo: action.payload
			};
		}
		case "RENDER_PHOTO": {
			return {
				...state,
				remainPhoto: action.payload
			}
		}
	}

	return state;
}

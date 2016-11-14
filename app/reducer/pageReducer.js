export default function reducer(state={
	catagory: [],
  logo: {}
}, action) {
	switch(action.type) {
    case "FETCH_LOGO":
		case "FETCH_CATAGORY": {
			return {
				...state
			};
		}
		case "FETCHED_CATAGORY": {
			return {
				...state,
				catagory: action.payload
			};
		}
    case "FETCHED_LOGO": {
      return {
        ...state,
        logo: action.payload
      }
    }
	}

	return state;
}

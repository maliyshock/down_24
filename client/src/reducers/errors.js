import {CLEAN_ERRORS, HIDE_ERROR} from "../consts";
import {removeFromArray} from "../utils";

const initState = {
	error: null,
	list: [],
};

export default function errorReducer(state = initState, action){
	const { error } = action;

	if(error) {
		return {
			error: error,
			list: [...state.list, error]
		}
	}

	switch (action.type) {
		case HIDE_ERROR: {

			return { ...state, list: removeFromArray(state.list, action.payload)};
		}
	}

	switch (action.type) {
		case CLEAN_ERRORS: {

			return { ...state, list: [], error: null};
		}
	}

	return state;
}
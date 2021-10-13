import {ERROR_WEATHER, RECEIVE_WEATHER, REQUEST_WEATHER} from "../consts";


const initialState = {
  data: null,
  isFetching: false,
  error: null,
  keys: [],
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHER: {
      return { ...state, isFetching: true };
    }

    case RECEIVE_WEATHER: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    }

    case ERROR_WEATHER: {
      return { ...state, error: action.error, isFetching: false };
    }

    default:
      return state;
  }
}

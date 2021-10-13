import {REQUEST_WEATHER, RECEIVE_WEATHER, ERROR_WEATHER, WEATHER_URL} from "../consts";
import {fetchUrl} from "../utils";

export function requestWeather() {
  return (dispatch) => {
    dispatch(
      {
        type: REQUEST_WEATHER,
      },
    );
  };
}

export function errorWeather(error) {
  return (dispatch) => {
    dispatch(
      {
        type: ERROR_WEATHER,
        error: error,
      },
    );
  };
}

export function receiveWeather(data) {
  return (dispatch) => {
    dispatch(
      {
        type: RECEIVE_WEATHER,
        payload: data,
      },
    );
  };
}

export const fetchWeather = () => (dispatch) => {
  dispatch(requestWeather());
  fetchUrl({url: WEATHER_URL, method:'GET'})
    .then((json) => {
      dispatch(receiveWeather(json.data));
    })
    .catch((err) => dispatch(errorWeather(err.toString())));
};

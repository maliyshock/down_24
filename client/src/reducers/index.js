import { combineReducers } from 'redux';
import weather from './weather';
import errors from "./errors";

const reducers = {
  weather,
  errors,
};

export default combineReducers(reducers);

import {combineReducers, Reducer} from 'redux';
import users, {UserStateType} from './users/index';

export type CombinedStateType = {
  users: UserStateType;
};

// @ts-ignore
export const appReducer: Reducer<CombinedStateType> = combineReducers({
  // ## Generator Reducers
  users,
});

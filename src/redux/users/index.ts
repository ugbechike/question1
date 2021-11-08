import { SetUserListRdxConst, setUserListReducer, SetUserListActionType } from './set-user-list-action';
import { UserType } from '../../../resources/types';

export type UserStateType = {
 userList: UserType
};

export type UserActionTypes = SetUserListActionType

const initialState: UserStateType = {
    userList: []
};

// Make sure reducer is added to lib/reducers namespace
function stateReducer(state: UserStateType = initialState, action: UserActionTypes): UserStateType {
  switch (action.type) {
    case SetUserListRdxConst:
      return setUserListReducer(state, <SetUserListActionType>action);
    default:
      return state;
  }
}

export default stateReducer;

// const
import { createAction } from 'redux-actions';
import { GenActionType } from '../../../resources/types';
import { UserStateType } from '.';

export const SetUserListRdxConst = 'AppState/SetUserListRdxConst';

// payload
type PayloadType = [];

export type UserListType = PayloadType;

// action type
export type SetUserListActionType = GenActionType<PayloadType>;

// action creator
export const setUserListAction = createAction(SetUserListRdxConst, (data: PayloadType) => data);

// action reducer
export const setUserListReducer = (state: UserStateType, action: SetUserListActionType): UserStateType => {
    // action.payload
    const { payload } = action;
    return {
        ...state,
        userList: payload,
    };
};

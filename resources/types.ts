export type UserType =  UserListType[]


export type UserListType = {
  id: string;
  first_name: string;
  last_name: string | undefined;
  text: string;
  email: string;
  backgroundColor: string;
  avatar: string;
  avatar_large: string | undefined;
};

export type UserListViewModeType = 'v' | 'h';


export type GenActionType<T> = { type: string; payload: T };
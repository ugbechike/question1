import {UserType, UserListType} from '../types';

function getValue(value: unknown) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  return value;
}

export type SortOrder = 'asc' | 'desc';

export function sortData<T extends object>(
  array: T[],
  key?: string,
  sortOrder?: SortOrder,
) {
  
  if (!key) return array;
  return array?.sort(function(a: any, b: any) {
    let nameA = getValue(a[key]);
    let nameB = getValue(b[key]);

    if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1;
    if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });
}

export function filterData(data: UserType){
  return data.filter((item: UserListType) => !!item.avatar_large);
}
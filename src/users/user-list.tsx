import React from 'react';
import {  StyleSheet, FlatList, View, Text } from 'react-native';
import { UserListCard } from '../components/user-list-card';
import { UserType, UserListViewModeType } from '../../resources/types';
import { productItemPerRowGrid } from '../../resources/user-card-size';


function renderItem({item}: any, cardType: 'ROW' | 'GRID' ) {
    return <UserListCard item={item} cardType={cardType} />;
}

type UserListType = {
    items: UserType;
    mode?: UserListViewModeType;
    userPerRow: number;
    handleLoadMore: () => void
    status: 'loading' | 'resolved' | 'error'
}

export function UserList(props: UserListType){
    const {items, mode, userPerRow, handleLoadMore, status} = props;
    const cardType = userPerRow === 1 && mode === 'v' ? 'ROW' : 'GRID';

    return (
      <FlatList
        key={mode === 'h' ? 'h' : 'v'}
        contentContainerStyle={styles.list}
        data={items}
        disableVirtualization
        numColumns={userPerRow}
        keyExtractor={(item: {id: string}) => item.id}
        renderItem={item => renderItem(item, cardType)}
        columnWrapperStyle={userPerRow > 1 ? styles.columnWrapperStyle : null}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={status === 'loading'}
      />
    );
}


const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
  },
  columnWrapperStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
  

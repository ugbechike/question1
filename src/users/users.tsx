import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
//@ts-ignore
import ActionBar from 'react-native-action-bar';
import {UserList} from './user-list';
import {UserListViewModeType} from '../../resources/types';
import {sortData, SortOrder, filterData} from '../../resources/utils/js-utils';
import { UseListUsers } from '../hooks/use-list-users';
import { useSelector, useDispatch } from 'react-redux';
import { CombinedStateType } from '../redux/reducer';
import { setUserListAction } from '../redux/users/set-user-list-action';


// todo move action bar to separate component
const data = require('../../resources/MOCK_DATA.json');
const sortKey = 'last_name';
export function Users() {
  const [userListMode, setUserListMode] = useState<{
    mode: UserListViewModeType;
    userPerRow: number;
  }>({mode: 'v', userPerRow: 1});
//   const [userData, setUserData] = useState<UserType>(data); // using local state
  // const [userData, setUserData] = useState<UserType>([]);
  // const [isLoading, setIsLoading] = useState(false);

  const [sortField, setSortField] = useState<string>();
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const dispatch = useDispatch()
  const {status, fetchData, setInput} = UseListUsers({});
  const userData = useSelector(
    (state: CombinedStateType) => state.users.userList,
  );

  const filterUser = filterData(data);

  const sortedData = sortData(userData, sortField, sortOrder);

  const handleFilterAvatar = () => {
    dispatch(setUserListAction(filterUser as any));
  };

  const handleSort = (key: string) => {
    setSortOrder('asc');
    setSortField(key);
  };

  const handleSortDesc = (key: string) => {
    setSortOrder('desc');
    setSortField(key);
  };

  // Using local state effects
    // useEffect(() => {
    //   setIsLoading(true);
    //   axios.get(API_URL).then(({data}: any) => {
    //    Promise.all(data.pages.map((page: any) => {
    //       axios.get(page).then(({data}) => {
    //         setIsLoading(false)
    //         setUserData(data);
    //     })
    //    }));
    //   }).catch(err => {
    //     setIsLoading(false)
    //     setUserData([]);
    //   });
    // }, []);

    const handleLoadMore = () => {
      // todo setInput with the parameters
      console.log('xxx');
      
    };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <ActionBar
        containerStyle={styles.bar}
        title={'User List'}
        titleContainerStyle={styles.titleBar}
        rightIcons={[
          {
            image: require('../../resources/img/grid.png'),
            onPress: () => {
              setUserListMode({
                mode: 'h',
                userPerRow: 2,
              });
            },
          },
          {
            image: require('../../resources/img/list.png'),
            onPress: () => {
              setUserListMode({
                mode: 'v',
                userPerRow: 1,
              });
            },
          },
          {
            image: require('../../resources/img/sort_az.png'),
            onPress: () => {
              handleSort(sortKey);
            },
          },
          {
            image: require('../../resources/img/sort_za.png'),
            onPress: () => handleSortDesc(sortKey),
          },
          {
            image: require('../../resources/img/avatar.png'),
            onPress: handleFilterAvatar,
          },
        ]}
      />
      {status === 'loading' ? (
        <ActivityIndicator size={25} color={'black'} />
      ) : (
        <UserList
          mode={userListMode.mode}
          userPerRow={userListMode.userPerRow}
          items={sortedData}
          handleLoadMore={handleLoadMore}
          status={status}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  list: {
    justifyContent: 'center',
  },
  bar: {
    padding: 10,
  },
  titleBar: {
    alignSelf: 'center',
    height: '100%',
  },
});

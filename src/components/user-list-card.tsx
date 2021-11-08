import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

enum CardType {
    ROW = 'ROW',
    GRID = 'GRID'
}
type UserListCardType = {
    item: any;
    cardType: CardType
}
export function UserListCard(props: UserListCardType){
    const { item, cardType } = props;
    const {backgroundColor, avatar, first_name, last_name, email} = item;
    const isRow = cardType === CardType.ROW 

    const _onPressItem = () => {

    }

    return (
      <TouchableOpacity
        onPress={_onPressItem}
        style={{
          padding: 10,
          width: isRow ? '100%' : '50%',
        }}>
        <View
          style={{
            flex: 1,
            padding: isRow ? 0 : 10,
            flexDirection: isRow ? 'row' : 'column',
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={{width: 100, height: 100}} source={{uri: avatar}} />
          <View
            style={{
              flex: 1,
              paddingLeft: 10,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}>
            <Text
              style={{
                textAlign: isRow ? 'left' : 'center',
              }}>
              {first_name} {last_name}
            </Text>
            <Text
              style={{
                textAlign: isRow ? 'left' : 'center',
              }}>
              {email}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}
import React, { Component } from 'react';
import { Users } from './src/users/users';
import { store } from './src/redux/store';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Users />
      </Provider>
    );
  }
}
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';
import thunkMiddleware from 'redux-thunk';
import {appReducer} from './reducer';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

const rootReducer = (state: any, action: any) => {
  if (action.type === 'AppState/ClearCacheRdxConst') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const enhancers = [applyMiddleware(thunkMiddleware)];

// @ts-ignore
const composeEnhancers = compose;

const enhancer = composeEnhancers(...enhancers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// @ts-ignore
export const store = createStore(persistedReducer, undefined, enhancer);
export const persistor = persistStore(store);

import {combineReducers} from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import {configureStore} from '@reduxjs/toolkit';
import expenses from '../reducers/expenses';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const combineReducer = combineReducers({
  expenses,
});

// //All reducers to persist
const persistedReducer = persistReducer(persistConfig, combineReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// const persistor = persistStore(store);
let persistor = persistStore(store);

export {store, persistor};

/** @format */

import { combineReducers, configureStore, createReducer } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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
import uiDataReducer from './slices/uiData';
import matchDataReducer from './slices/matchData';
import playerDataReducer from './slices/playerData';
import { apiMatch } from './api/match';
import { uuid } from '../utils/uuid';

const persistConfig = {
  key: 'root',
  storage: storage,
};

export const rootReducers = combineReducers({
  [apiMatch.reducerPath]: apiMatch.reducer,
  uiDataReducer,
  matchDataReducer,
  playerDataReducer,
  clientId: createReducer(uuid(), s => s),
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiMatch.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
